import React from "react"
import { Route } from "react-router-dom"
import HomePage from "../../homePage/HomePage"

const ContentRouter = (props) => {
    var toggleFalafelDrawer = props.toggleFalafelDrawer
    var active = props.active
    var topTracks = props.topTracks
    var playlists = props.playlists
    var topArtists = props.topArtists
    var ref = props.ref
    var onArtistClick = props.onArtistClick
    return (
        <React.Fragment>
            <div className="container-fluid">
                {/* /* components will be individual routers */
        /* Top left "logo" route */}
                {/* Top navbar routes */}

                <Route path="" component="" />
                <Route
                    exact path="/"
                    render={props => <HomePage {...props} ref={ref} topArtists={topArtists} playlists={playlists} topTracks={topTracks} toggleFalafelDrawer={toggleFalafelDrawer} active={active} onArtistClick={onArtistClick} />} />

            </div>
        </React.Fragment>
    )
}
export default ContentRouter