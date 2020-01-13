import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import { Col, Row, Carousel, } from "react-bootstrap";
import DrawerFirstSlide from "./slides/FirstSlide";
import "./FalafelDrawer.css"
// import DrawerSecondSlide from "./DrawerSecondSlide";


const FalafelDrawer = props => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    // console.log(props.activeIndex)
    return (
        <React.Fragment>
            <div id={props.activeSlide} className="drawer" >
                {props.open && props.activePlaylistTracks && (

                    <Carousel controls={props.activeSlide == 'first' ? false : true} activeIndex={props.activeIndex} interval='1000000' direction={props.direction} onSelect={props.handleSelect} style={{ maxHeight: "45vh" }} data-ride='none'>
                        <Carousel.Item>
                            <DrawerFirstSlide
                                onShowtimeClick={props.onShowtimeClick}
                                backgroundPath={props.backgroundPath}
                                videoPath={props.videoPath}
                                activePlaylistTracks={props.activePlaylistTracks}
                                activeItem={props.activeItem}
                                activePlaylistCover={props.activePlaylistCover}
                                onTrackClick={props.onTrackClick}

                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <DrawerFirstSlide
                                onShowtimeClick={props.onShowtimeClick}
                                backgroundPath={props.backgroundPath}
                                videoPath={props.videoPath}
                                activePlaylistTracks={props.activePlaylistTracks}
                                activeItem={props.activeItem}
                                activePlaylistCover={props.activePlaylistCover}
                                onTrackClick={props.onTrackClick}

                            />

                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <DrawerSecondSlide
                activeTixRow={props.activeTixRow}
                                onChange={props.onChange}
                                selectedShowtime={props.selectedShowtime}
                                increment={props.increment}
                                decrement={props.decrement}
                                adultTix={props.adultTix}
                                childTix={props.childTix}
                                seniorTix={props.seniorTix}
                                selectedMovie={props.selectedMovie}
                                theaterName={props.theaterName}
                                theaterAddress={props.theaterAddress}
                                showtimeDetails={props.showtimeDetails}
                            />
                        </Carousel.Item> */}
                        {/* <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            / >

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            / >

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                )}
            </div>

        </React.Fragment>
    )
}

export default withRouter(FalafelDrawer)