import './App.css';
import BookingForm from './BookingForm.js';

function BookingPage({
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes,
    dispatch,
    handleSubmit,
}) {
    return (
        <main>
            <section className="booking-page">
                <h1>Book Your Table</h1>
                <p>Welcome to Little Lemon's reservation system. Please fill out the form below to secure your spot.</p>
                <BookingForm
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    guests={guests}
                    setGuests={setGuests}
                    occasion={occasion}
                    setOccasion={setOccasion}
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    handleSubmit={handleSubmit}
                />
                <p>After submitting, you’ll receive a confirmation email. Thank you!</p>
            </section>
        </main>
    );
}

export default BookingPage;