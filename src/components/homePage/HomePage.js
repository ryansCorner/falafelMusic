import React from "react"
import { withRouter } from "react-router-dom"
import SlickCarousel from "../slickCarousel/SlickCarousel";



const HomePage = props => {
    // console.log('PROPS: ', props)
    return (
        <React.Fragment>
            <div className="movie-card-carousel">

                <div>

                    <SlickCarousel
                        toggleFalafelDrawer={props.toggleFalafelDrawer}
                        active={props.active}
ref={props.ref}
                        dots="true"
                        infinite="true"
                        speed="500"
                        slidesToShow="9"
                        slidesToScroll="3"
                        adaptiveHeight="false"
                        label="Playlists"
                        playlists={props.playlists}
                    />
                </div>
            </div>

            <div className="movie-card-carousel">

                <div>

                    <SlickCarousel
                        toggleFalafelDrawer={props.toggleFalafelDrawer}
                        active={props.active}
                        ref={props.ref}
                        onArtistClick={props.onArtistClick}
                        dots="true"
                        infinite="true"
                        speed="500"
                        slidesToShow="9"
                        slidesToScroll="3"
                        adaptiveHeight="false"
                        label="My Top Artists"
                        topArtists={props.topArtists.reverse()}

                    />
                </div>
            </div>

            <div className="movie-card-carousel">
                {/* <BasicSlider
    className="container"
    npFilms={props.npFilms} / > */}

                <SlickCarousel
                    active={props.active}
                    ref={props.ref}

                    toggleFalafelDrawer={props.toggleFalafelDrawer}
                    dots="true"
                    infinite="true"
                    speed="500"
                    slidesToShow="9"
                    slidesToScroll="3"
                    adaptiveHeight="false"
                    label="Top Tracks"
                    topTracks={props.topTracks}
                />
            </div>


        </React.Fragment>

    )
}

export default withRouter(HomePage)