import React from "react"
import { withRouter } from "react-router-dom"


const Thumbnail = props => {
    return (
        <a onClick={props.toggleFalafelDrawer} >
            <div className='movie-thumbnail-card' id={props.containerId} >
                <img src={props.src}
                    variant="thumbnail"
                    id={props.id}
                    data-item={props.id}
                    onClick={props.onArtistClick}
                    ref={props.ref}
                    className={props.active == props.id ? "movie-thumbnail-active item" : "movie-thumbnail"}
                    alt={props.title}
                    key={props.id}
                    name={props.name}
                    playlist={props.playlist}
                />
            </div>
        </a>

    )
}

export default withRouter(Thumbnail)