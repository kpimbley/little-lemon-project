import './App.css'; // Reuse App.css

function Card({ image, alt, title, description, orderLink }) {
    return (
        <div className="card">
            <img src={image} alt={alt} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
            <button onClick={() => window.location.href = orderLink}>Order for Delivery</button>
        </div>
    );
}

export default Card;