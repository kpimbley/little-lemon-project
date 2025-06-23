import Food from './restauranfood.jpg';
import Salad from './greeksalad.jpg';
import Bruschetta from './bruschetta.jpg';
import LemonDessert from './lemondessert.jpg';
import MarioAdrianA from './Mario_and_Adrian_A.jpg';
import MarioAdrianB from './Mario_and_Adrian_b.jpg';

function Main(){
    return (<main>
        <ul> {/*Hero section*/}
            <li>  </li>
            <li><h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <a href="./reservations"><button>Reserve a table</button></a></li>
            <li>  </li>
            <li><img src={Food} alt="Food plate"></img></li>
            <li>  </li>
        </ul>
        <ul> {/*Specials banner and button*/}
            <li><h2>This week's specials!</h2></li>
            <li><a href='./menu'><button>Online Menu</button></a></li>
        </ul>
        <ul> {/*Specials pictures and descriptions*/}
            <li>
                <img src={Salad} alt="Greek Salad"></img>
                <h3>Greek Salad</h3>
                <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <h4>Order for delivery</h4>
            </li>
            <li>
                <img src={Bruschetta} alt="Bruschetta"></img>
                <h3>Bruschetta</h3>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with olive oil.</p>
                <h4>Order for delivery</h4>
            </li>
            <li>
                <img src={LemonDessert} alt="Lemon Dessert"></img>
                <h3>Lemon Dessert</h3>
                <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <h4>Order for delivery</h4>
            </li>
        </ul>
        <h2>Testimonials</h2>
        <ul> {/*Testimonials*/}
            <li>
                <h3>Star rating</h3>
                <img></img>
                <p>Review</p>
                <p>User profile</p>
            </li>
            <li>
                <h3>Star rating</h3>
                <img></img>
                <p>Review</p>
                <p>User profile</p>
            </li>
            <li>
                <h3>Star rating</h3>
                <img></img>
                <p>Review</p>
                <p>User profile</p>
            </li>
            <li>
                <h3>Star rating</h3>
                <img></img>
                <p>Review</p>
                <p>User profile</p>
            </li>
        </ul>
        <ul> {/*Little Lemon about short section*/}
            <li>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </li>
            <li><img src={MarioAdrianA} alt="Mario and Adrian"></img></li>
            <li><img src={MarioAdrianB} alt="Mario and Adrian"></img></li>
        </ul>
    </main>);
}

export default Main;