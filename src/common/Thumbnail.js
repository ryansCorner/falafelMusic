import React from "react"
import { withRouter } from "react-router-dom"


const Thumbnail = props => {
    // console.log('playlist thumbnail props', props)
    return (
        <a
            onClick={props.toggleFalafelDrawer}
        >
            <div className='movie-thumbnail-card' id={props.containerId} >
                <img src={props.src}
                    variant="thumbnail"
                    id={props.playlist.id}
                    data-item={props.playlist.id}
                    // onClick={props.onArtistClick}
                    ref={props.ref}
                    className={props.active == props.playlist.id ? "movie-thumbnail-active item" : "movie-thumbnail"}
                    alt={props.title}
                    key={props.id}
                    name={props.playlist.name}
                    images={props.playlist.images}
                    owner={props.playlist.owner}
                    tracks={props.playlist.tracks}
                />
            </div>
        </a>

    )
}

export default withRouter(Thumbnail)