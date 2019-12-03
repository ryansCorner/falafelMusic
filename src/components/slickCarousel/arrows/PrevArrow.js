import React from 'react'
import LargeBackArrowButton from "./BackArrow2x.png"

function PrevArrow(props) {
    const { className } = props;
    return (
        <div>
            <img
                alt=""
                src={LargeBackArrowButton}
                width="100px"
                height="100px"
                className={className}
                onClick={props.onClick}
            />
        </div>
    );
}

export default PrevArrow