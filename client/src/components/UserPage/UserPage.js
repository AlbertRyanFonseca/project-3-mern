import './UserPage.css'

function UserPage(props) {
    return (
        <div className="icons__container">
            <div className="icon__title">
                <h2>{props.title}Hello!</h2>
                <div className="icon__description">{props.description}</div>
            </div>
        </div>
    );

};

export default UserPage;
