import React from 'react'
import LargeArrowButton from "./LargeArrowButton.png"


function NextArrow(props) {
    const { className } = props;
    return (

        <div>
            <img
                alt=""
                src={LargeArrowButton}
                width="50%"
                height="50%"
                className={className}
                onClick={props.onClick}
            />
        </div>
    );
}

export default NextArrow