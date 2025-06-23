import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage.js';
import { useReducer, useState } from 'react';

function updateTimes(state, action) {
    switch (action.type) {
        case 'update':
            console.log('Updating times for date:', action.date);
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        default:
            return state;
    }
}

function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ date, time, guests, occasion });
  };
  return (
      <Router>
          <div className="app">
              <Header />
              <Nav />
              <Routes>
                  <Route
                    path="/home"
                    element={
                      <Main
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
                    }
                  />
                  <Route
                      path="/reservations"
                      element={
                          <BookingPage
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
                      }
                  />
                  <Route path="*" element={<Main />} /> {/* Default to Main for other routes */}
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;