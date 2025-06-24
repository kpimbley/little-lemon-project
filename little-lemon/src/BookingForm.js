import { useEffect, useRef, useState } from 'react';

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
    dispatch, // Optional, ignore if unused
    handleSubmit,
}) {
    const [formIsValid, setFormIsValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            setFormIsValid(formRef.current.checkValidity());
        }
    }, [date, time, guests, occasion]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
    };

    const handleSubmitLocal = (e) => {
        if (e) e.preventDefault();
        handleSubmit(e);
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmitLocal}
            onChange={() => {
                if (formRef.current) {
                    setFormIsValid(formRef.current.checkValidity());
                }
            }}
            aria-label="Reservation form"
            style={{
                display: 'grid',
                maxWidth: '300px',
                gap: '20px',
                padding: '1rem',
            }}
        >
            <fieldset>
                <legend>Make a Reservation</legend>

                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Select a time
                    </option>
                    {availableTimes.length > 0 ? (
                        availableTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>
                                {timeOption}
                            </option>
                        ))
                    ) : (
                        <option disabled>No times available</option>
                    )}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    min="1"
                    max="10"
                    required
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Select an occasion
                    </option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <button type="submit" disabled={!formIsValid}>
                    Make Your Reservation
                </button>
            </fieldset>
        </form>
    );
}

export default BookingForm;