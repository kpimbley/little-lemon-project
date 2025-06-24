// src/App.test.js
import { initializeTimes, updateTimes } from './App';

// Mock global window.fetchAPI for tests
beforeEach(() => {
    // Reset window.fetchAPI for each test
    delete global.window;
    global.window = { fetchAPI: jest.fn() };
    // Clear mock calls
    window.fetchAPI.mockClear();
});

describe('Booking Reducer Functions', () => {
  test('initializeTimes returns the correct initial array of available times', async () => {
    const today = new Date().toISOString().split('T')[0]; // '2025-06-24'
    const expectedTimes = ['09:30', '10:00', '11:00']; // Match mock API for today
    window.fetchAPI.mockResolvedValue(expectedTimes);
    const result = await initializeTimes();
    expect(result).toEqual(expectedTimes);
    expect(result).toHaveLength(3);
    expect(result).toContain('09:30');
    expect(result).toContain('11:00');
    expect(window.fetchAPI).toHaveBeenCalledWith(today);
  });

  test('updateTimes returns the same value as provided in the state', async () => {
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'update', date: '2025-06-24' };
    window.fetchAPI.mockResolvedValue(currentState); // Mock to return same state
    const result = await updateTimes(currentState, action);
    expect(result).toEqual(currentState);
    expect(result).toHaveLength(6);
    expect(result).toContain('17:00');
    expect(result).toContain('22:00');
    expect(window.fetchAPI).toHaveBeenCalledWith('2025-06-24');
  });
});