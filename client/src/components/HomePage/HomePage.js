import Icon from '../Icon/Icon';
import './HomePage.css';

function HomePage(props) {


    return (
        <Icon>
            <div className="icon__title">
                <h2>{props.title}</h2>
                <div className="icon__description">{props.description}</div>
            </div>
        </Icon>
    );

};

export default HomePage;