import React from "react"
import { withRouter } from "react-router-dom"
import { Table, Media, ButtonToolbar, Col, Row, Button, Container, Image } from "react-bootstrap";
import TheaterLineBreak from "../../../common/TheaterLineBreak";







const ArtistSlide = props => {
    console.log('artist slide props', props)

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    const mapTracks = props.activeTracks.map((tracks, idx) => {
        console.log('@#*)$(*#)(*#$)(*$)*#)*$)#(*)#$@*#$*)', tracks.id)
        var trax = tracks.track
        var minutes = millisToMinutesAndSeconds(tracks.duration_ms)
        return (
            <tr key={idx} onClick={props.onTrackClick} data-item={tracks.id}>
                <td data-item={tracks.id}>{tracks.name}</td>
                <td data-item={tracks.id}>{tracks.album.artists[0].name}</td>
                <td data-item={tracks.id}>{tracks.album.name}</td>
                <td data-item={tracks.id}>{minutes}</td>
            </tr>
        )
    })

    return (
        <Container fluid >

            <Media style={{ maxHeight: "45vh" }} >

                <Col lg={{ span: 4, offset: 1 }}>

                    <div className="trailer-iframe">
                        <h1> {props.activeItem.name}</h1>
                        <h3>{props.activeItem.followers.total} followers</h3>
                        {/* <Image
                            src={props.activePlaylistCover}
                        /> */}
                        {/* <iframe id="ytplayer" type="text/html" width="315" height="177.1875"
                            src={`https://www.youtube.com/embed/${props.videoPath}`}
                            frameborder="0" allowfullscreen /> */}

                        {/* <iframe width="315" height="210" type="text/html"
                            src={`https://www.youtube.com/embed/${props.videoPath}`}>
                        </iframe> */}
                    </div>
                </Col>
                <Col lg={{ span: 7, offset: 0 }} className='theater-container-col'>

                    <Media.Body >
                        <div className="theater-container">
                            <div >

                                <Table striped bordered hover responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Track</th>
                                            <th>Artist</th>
                                            <th>Album</th>
                                            <th>Length</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mapTracks}
                                    </tbody>
                                </Table>

                            </div>
                        </div>
                    </Media.Body>
                </Col>
            </Media>
        </Container>
    )
}

export default withRouter(ArtistSlide)
