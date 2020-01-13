import React from "react";
import Slider from "react-slick";
import { withRouter } from "react-router-dom"
import NextArrow from "./arrows/NextArrow";
import PrevArrow from "./arrows/PrevArrow";
import Thumbnail from "../../common/Thumbnail";
import ArtistThumbnail from '../../common/ArtistThumbnail'
import './Sliders.scss'



const SlickCarousel = props => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <React.Fragment>

            <h1 className="slider-label"> {props.label}</h1>
            <Slider
                variant="movie"
                className="slider variable-width"
                focusOnSelect='true'
                dots={settings.dots}
                infinite={settings.infinte}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                adaptiveHeight={settings.adaptiveHeight}
                nextArrow={settings.nextArrow}
                prevArrow={settings.prevArrow}
            >
                {props.playlists && (
                    props.playlists.map((playlist, idx) => {
                        var derp = { playlist: playlist }
                        return (
                            <div key={idx}>
                                <Thumbnail
                                    ref={props.ref}
                                    playlist={playlist}
                                    toggleFalafelDrawer={props.toggleFalafelDrawer}
                                    active={props.active}
                                    idx={idx}
                                    backdropPath={playlist.backdrop_path}
                                    src={playlist.images[0].url}
                                    id={playlist.id}
                                    name={derp.playlist}
                                />
                            </div>
                        )
                    })
                )}
                {props.topArtists && (
                    props.topArtists.map((artist, idx) => {
                        return (
                            <div key={idx}>
                                <ArtistThumbnail
                                    toggleFalafelDrawer={props.toggleFalafelDrawer}
                                    ref={props.ref}
                                    active={props.active}
                                    idx={idx}
                                    backdropPath={artist.backdrop_path}
                                    name={artist.name}
                                    src={artist.images[0].url}
                                    id={artist.id}
                                    onArtistClick={props.onArtistClick}

                                />
                            </div>
                        )
                    })
                )}
                {props.topTracks && (
                    props.topTracks.map((track, idx) => {
                        return (
                            <div key={idx} className="card-slider">
                                <Thumbnail
                                    backdropPath={track.backdrop_path}
                                    ref={props.ref}
                                    active={props.active}
                                    idx={idx}
                                    toggleFalafelDrawer={props.toggleFalafelDrawer}
                                    src={track.album.images[0].url}
                                    id={track.id}
                                    name={track.name}

                                />
                            </div>
                        )
                    })
                )}



            </Slider>
        </React.Fragment>
    );
}

export default withRouter(SlickCarousel)