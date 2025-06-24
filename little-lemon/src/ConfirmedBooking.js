// src/ConfirmedBooking.js
function ConfirmedBooking() {
    return (
        <div className="confirmed-booking">
            <h1>Booking Confirmed!</h1>
            <p>Thank you for your reservation. We look forward to serving you!</p>
            <button onClick={() => window.location.href = '/'}>Back to Home</button>
        </div>
    );
}

export default ConfirmedBooking;