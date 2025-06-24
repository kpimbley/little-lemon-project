import { useState } from 'react';
import BookingForm from './BookingForm';

function BookingFormWrapper({ handleSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  return (
    <BookingForm
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={['18:00', '19:00']}
      handleSubmit={handleSubmit}
    />
  );
}

export default BookingFormWrapper;