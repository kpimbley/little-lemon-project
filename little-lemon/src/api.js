// src/api.js
export function fetchAPI(date) {
    // Mock API response based on date
    const today = new Date().toISOString().split('T')[0]; // '2025-06-24'
    if (date === today) {
        return Promise.resolve(['09:30', '10:00', '11:00']); // Times for today
    }
    return Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
}

export function submitAPI(formData) {
    return Promise.resolve(true); // Mock success
}