import './App.css';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { useState, useEffect } from 'react';

// Local API module with fallback to global
const getFetchAPI = () => window.fetchAPI || (() => Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']));

async function initializeTimes() {
    const today = new Date().toISOString().split('T')[0]; // e.g., '2025-06-24'
    try {
        const availableTimes = await getFetchAPI()(today);
        console.log('Initialized times for', today, ':', availableTimes);
        return availableTimes || ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    } catch (error) {
        console.error('Error fetching initial times for', today, ':', error);
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }
}

async function updateTimes(state, action) {
    if (action.type === 'update') {
        try {
            const availableTimes = await getFetchAPI()(action.date);
            return availableTimes;
        } catch (error) {
            console.error('updateTimes error:', error);
            return state; // fallback to previous state if fetch fails
        }
    }
    return state;
}

function App() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('useEffect triggered');
        let isMounted = true;
        initializeTimes()
            .then(times => {
                if (isMounted) {
                    console.log('Setting initial times:', times);
                    setAvailableTimes(times);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                if (isMounted) {
                    console.error('Error in useEffect:', error);
                    setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleSubmit = (eOrData) => {
        console.log('App handleSubmit called with:', eOrData);
        // Simply forward to the next level, let Main.js handle submission
        if (eOrData && typeof eOrData.preventDefault === 'function') {
            eOrData.preventDefault();
        }
        // No additional processing, rely on Main.js
    };

    console.log('App availableTimes:', availableTimes);

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div className="app">
                    <Header />
                    <Nav />
                    <Outlet />
                    <Footer />
                </div>
            ),
            children: [
                {
                    index: true,
                    element: (
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
                            dispatch={() => {}}
                            handleSubmit={handleSubmit}
                        />
                    ),
                },
                {
                    path: '/home',
                    element: (
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
                            dispatch={() => {}}
                            handleSubmit={handleSubmit}
                        />
                    ),
                },
                {
                    path: '/reservations',
                    element: (
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
                            dispatch={() => {}}
                            handleSubmit={handleSubmit}
                        />
                    ),
                },
                {
                    path: '/confirmed',
                    element: <ConfirmedBooking />
                },
                {
                    path: '*',
                    element: <Main {...{ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatch: () => {}, handleSubmit }} />,
                },
            ],
        },
    ]);

    console.log('Router created, initial path:', window.location.pathname);
    return <RouterProvider router={router} />;
}

export { initializeTimes, updateTimes };
export default App;