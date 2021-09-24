import HomePage from "../HomePage/HomePage";

function IconInfo(props) {
    return (
        <div>
            <HomePage title={props.info[0].title}
                description={props.info[0].description}
            />
            <HomePage title={props.info[1].title}
                description={props.info[1].description}
            />
            <HomePage title={props.info[2].title}
                description={props.info[2].description}
            />
            <HomePage title={props.info[3].title}
                description={props.info[3].description}
            />
            <HomePage title={props.info[4].title}
                description={props.info[4].description}
            />
            <HomePage title={props.info[5].title}
                description={props.info[5].description}
            />
            <HomePage title={props.info[6].title}
                description={props.info[6].description}
            />
            <HomePage title={props.info[7].title}
                description={props.info[7].description}
            />
            <HomePage title={props.info[8].title}
                description={props.info[8].description}
            />
        </div>
    )
}

export default IconInfo;