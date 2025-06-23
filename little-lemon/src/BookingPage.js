import './App.css';
import BookingForm from './BookingForm.js';

function BookingPage() {
    return (
        <main>
            <section className="booking-page">
                <h1>Book Your Table</h1>
                <p>Welcome to Little Lemon's reservation system. Please fill out the form below to secure your spot.</p>
                <BookingForm />
                <p>After submitting, you’ll receive a confirmation email. Thank you!</p>
            </section>
        </main>
    );
}

export default BookingPage;