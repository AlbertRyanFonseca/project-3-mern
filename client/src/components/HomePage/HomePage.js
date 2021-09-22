import './HomePage.css';

function HomePage(props) {
    return (
        <div className="icons__container">
            <div className="icon__title">
                <h2>{props.title}</h2>
                <div className="icon__description">{props.description}</div>
            </div>
        </div>
    );

};

export default HomePage;