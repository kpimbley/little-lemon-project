import './App.css'; // Reuse existing styles

function BookingForm({
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes = [], // Default to empty array if undefined
    dispatch,
    handleSubmit,
}) {
    console.log('setDate prop:', setDate);
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'update', date: newDate }); // Explicit action object
        console.log('Dispatched date:', newDate); // Debug
    };

    console.log('Available times in BookingForm:', availableTimes); // Debug

    return (
        <form
            style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
            onSubmit={handleSubmit}
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
                {availableTimes.map((timeOption) => (
                    <option key={timeOption}>{timeOption}</option>
                ))}
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