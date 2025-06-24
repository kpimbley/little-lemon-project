import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingFormWrapper from './BookingFormWrapper';
import BookingForm from './BookingForm';

const fillValidForm = async () => {
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  await userEvent.type(dateInput, '2025-06-30');
  await userEvent.selectOptions(timeSelect, '18:00');
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, '3');
  await userEvent.selectOptions(occasionSelect, 'Birthday');
};

describe('BookingForm HTML5 validations', () => {
  const mockProps = {
    date: '',
    setDate: jest.fn(),
    time: '',
    setTime: jest.fn(),
    guests: 1,
    setGuests: jest.fn(),
    occasion: '',
    setOccasion: jest.fn(),
    availableTimes: ['18:00', '19:00'],
    handleSubmit: jest.fn(),
  };

  test('renders date input with required attribute', () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('renders time select with required attribute', () => {
    render(<BookingForm {...mockProps} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('renders guests input with min and max', () => {
    render(<BookingForm {...mockProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('renders occasion select with required attribute', () => {
    render(<BookingForm {...mockProps} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });

  test('submit button is disabled with incomplete form', () => {
    render(<BookingForm {...mockProps} />);
    const submitBtn = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitBtn).toBeDisabled();
  });

    test('submit button is enabled with complete and valid form', async () => {
    render(<BookingFormWrapper handleSubmit={jest.fn()} />);

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    await userEvent.type(dateInput, '2025-06-30');
    await userEvent.selectOptions(timeSelect, '18:00');
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, '3');
    await userEvent.selectOptions(occasionSelect, 'Birthday');

    await waitFor(() => {
        expect(screen.getByRole('button', { name: /make your reservation/i })).not.toBeDisabled();
    });
    });
});
