import React from "react"
import { Navbar, Nav, FormControl, Button, Form, Col, Row } from "react-bootstrap"
import { withRouter } from "react-router-dom";
import './NavBar.css'
import FalafelDrawer from "../drawer/FalafelDrawer";



const NavBar = props => {

    return (
        <React.Fragment>
            <Navbar bg="wofees" expand="lg" sticky="top" variant="wofees" >
                <Col xs={6} md={4}>

                    <Form inline>
                        <FormControl type="text" placeholder="Enter Movie, City, or Zip" className=" nav-input" value={props.keyword} name="keyword" onChange={props.onChange}
                            onKeyPress={event => { if (event.key === "Enter") { props.onClick() } }} />
                        <Button variant="flat" onClick={props.onClick}>Go</Button>
                    </Form>
                </Col>

                <Col xs={6} md={4}>

                    <Navbar.Brand href="" className="nav-brand-link" onClick={() => window.location = 'https://falafel-spotify-server.herokuapp.com/loginSpotify'}>
                        falafel

                    </Navbar.Brand>                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Col>
                <Col xs={6} md={4}>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <Nav.Link className="nav-link-account" href="" onClick={props.onGetSpotProfileClick}>
                                account
                               </Nav.Link>
                            <span className="nav-bullet">&#8226;</span>

                            <Nav.Link className="nav-link-signout" href="#signOut">
                                sign out
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
            <Row className="drawer-row"
                style={{ backgroundImage: `url("${props.activePlaylistCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', filter: `alpha('opacity=0.6') ` }}
            >
                <FalafelDrawer
                    activeTixRow={props.activeTixRow}
                    onChange={props.onChange}
                    direction={props.direction}
                    increment={props.increment}
                    decrement={props.decrement}
                    activeSlide={props.activeSlide}
                    handleSelect={props.handleSelect}
                    activeIndex={props.activeIndex}
                    time={props.time}
                    backgroundPath={props.backgroundPath}
                    open={props.falafelOpen}
                    videoPath={props.videoPath}
                    activePlaylistTracks={props.activePlaylistTracks}
                    activeItem={props.activeItem}
                    activePlaylistCover={props.activePlaylistCover}
                    onTrackClick={props.onTrackClick}
                />
                {/* </div> */}
            </Row>
        </React.Fragment>
    )
}
export default withRouter(NavBar)
