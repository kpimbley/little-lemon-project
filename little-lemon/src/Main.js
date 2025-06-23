import Food from './restauranfood.jpg';
import Salad from './greeksalad.jpg';
import Bruschetta from './bruschetta.jpg';
import LemonDessert from './lemondessert.jpg';
import MarioAdrianA from './Mario_and_Adrian_A.jpg';
import MarioAdrianB from './Mario_and_Adrian_b.jpg';
import Card from './Card.js';
import BookingPage from './BookingPage.js';

function Main() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist.
                    </p>
                    <button onClick={() => window.location.href = '/reservations'}>Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src={Food} alt="A plate of delicious restaurant food" />
                </div>
            </section>

            {/* Specials Banner */}
            <section className="specials-banner">
                <h2>This week's specials!</h2>
                <button onClick={() => window.location.href = '/menu'}>Online Menu</button>
            </section>

            {/* Specials Cards */}
            <section className="specials">
                <Card
                    image={Salad}
                    alt="Greek Salad"
                    title="Greek Salad"
                    description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    orderLink="/order"
                />
                <Card
                    image={Bruschetta}
                    alt="Bruschetta"
                    title="Bruschetta"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with olive oil."
                    orderLink="/order"
                />
                <Card
                    image={LemonDessert}
                    alt="Lemon Dessert"
                    title="Lemon Dessert"
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    orderLink="/order"
                />
            </section>

            {/* Testimonials (Placeholder) */}
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial-list">
                    <div>
                        <h3>Star rating</h3>
                        <img src="" alt="Star rating" /> {/* Replace with actual star image */}
                        <p>Review</p>
                        <p>User profile</p>
                    </div>
                    <div>
                        <h3>Star rating</h3>
                        <img src="" alt="Star rating" />
                        <p>Review</p>
                        <p>User profile</p>
                    </div>
                    <div>
                        <h3>Star rating</h3>
                        <img src="" alt="Star rating" />
                        <p>Review</p>
                        <p>User profile</p>
                    </div>
                    <div>
                        <h3>Star rating</h3>
                        <img src="" alt="Star rating" />
                        <p>Review</p>
                        <p>User profile</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
                <img src={MarioAdrianA} alt="Mario and Adrian" />
                <img src={MarioAdrianB} alt="Mario and Adrian" />
            </section>
        </main>
    );
}

export default Main;