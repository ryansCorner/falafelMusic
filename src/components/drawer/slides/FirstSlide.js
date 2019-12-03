import React from "react"
import { withRouter } from "react-router-dom"
import { Table, Media, ButtonToolbar, Col, Row, Button, Container, Image } from "react-bootstrap";
import TheaterLineBreak from "../../../common/TheaterLineBreak";







const FirstSlide = props => {

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    const mapTracks = props.activePlaylistTracks.map((tracks, idx) => {
        console.log('@#*)$(*#)(*#$)(*$)*#)*$)#(*)#$@*#$*)', tracks.track.id)
        var trax = tracks.track
        var minutes = millisToMinutesAndSeconds(tracks.track.duration_ms)
        return (
            <tr key={idx} onClick={props.onTrackClick} data-item={tracks.track.id}>
                <td data-item={tracks.track.id}>{tracks.track.name}</td>
                <td data-item={tracks.track.id}>{tracks.track.album.artists[0].name}</td>
                <td data-item={tracks.track.id}>{tracks.track.album.name}</td>
                <td data-item={tracks.track.id}>{minutes}</td>
            </tr>
        )
    })

    return (
        <Container fluid >

            <Media style={{ maxHeight: "45vh" }} >

                <Col lg={{ span: 4, offset: 1 }}>

                    <div className="trailer-iframe">
                        <h1> {props.activeItem.name}</h1>
                        <h3>{props.activeItem.tracks.items.length} songs</h3>
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
                <Col lg={{ span: 7, offset: 0 }} classname='theater-container-col'>

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

export default withRouter(FirstSlide)
