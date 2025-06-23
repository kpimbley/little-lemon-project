import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage.js';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Nav />
                <Routes>
                    <Route path="/home" element={<Main />} />
                    <Route path="/reservations" element={<BookingPage />} />
                    <Route path="*" element={<Main />} /> {/* Default to Main for other routes */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;