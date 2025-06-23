import { initializeTimes, updateTimes } from './App';

describe('Booking Reducer Functions', () => {
  test('initializeTimes returns the correct initial array of available times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
    expect(result).toHaveLength(6);
    expect(result).toContain('17:00');
    expect(result).toContain('22:00');
  });

  test('updateTimes returns the same value as provided in the state', () => {
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'update', date: '2025-06-23' };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
    expect(result).toHaveLength(6);
    expect(result).toContain('17:00');
    expect(result).toContain('22:00');
  });
});