// src/BookingForm.js
function BookingForm({
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes = [],
    dispatch, // Ignore if not used
    handleSubmit,
}) {
    console.log('Rendering BookingForm, availableTimes:', availableTimes);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        console.log('Date changed to:', newDate);
    };

    const handleSubmitLocal = (e) => {
        if (e) e.preventDefault();
        console.log('BookingForm handleSubmitLocal called with event:', e);
        const formData = { date, time, guests, occasion };
        handleSubmit(formData); // Pass form data to trigger submission chain
    };

    return (
        <form
            style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
            onSubmit={handleSubmitLocal}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.length > 0 ? (
                    availableTimes.map((timeOption) => (
                        <option key={timeOption}>{timeOption}</option>
                    ))
                ) : (
                    <option disabled>No times available</option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;