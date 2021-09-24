import './Icon.css';

function Icon(props) {
    return (
        <div className="icon__containter">
            <div className="outer__circle">
                <div className="inner__circle">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Icon;