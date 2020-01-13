import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import NavBar from "../navigation/NavBar"
import ContentRouter from "../navigation/contentRouter/ContentRouter";
import { withRouter } from "react-router-dom"
import Spotify from '../../services/SpotifyServices'
import queryString from 'query-string'


class Layout extends React.Component {
    constructor(props) {
        super(props)
        const parsed = queryString.parse(window.location.search);
        const accessToken = parsed.access_token
        this.state = {
            country: null,
            email: null,
            displayName: null,
            userUrl: null,
            followerNum: null,
            proilePic: null,
            accountType: null,
            spotifyId: null,
            UserId: null,
            accessToken: accessToken,
            userHref: null,
            id: null,
            subscriptionType: null,
            userUri: null,
            playlists: null,
            topTracks: null,
            topArtists: null,
            open: false,
            falafelOpen: false,
            active: false,
            activePlaylistTracks: null,
            activeItem: null,
        }
        this.onClickRef = React.createRef();
        this.toggleFalafelDrawer = this.toggleFalafelDrawer.bind(this);
        this.previousArrowClicked = this.previousArrowClicked.bind(this);
        this.previousArrowClicked = this.previousArrowClicked.bind(this);

    }



    onGetSpotProfileClick = evt => {
        if (!this.state.spotifyId) {
            console.log("acce$$ token: ", this.state.accessToken)
            Spotify.getUser(this.state.accessToken, this.onUserSuccess, this.onUserError)
        }
        // Spotify.getUser(this.state.accessToken, this.onUserSuccess, this.onUserError)
    }

    onUserSuccess = evt => {
        console.log('get user profile data success', evt)
        this.setState({
            ...this.state,
            country: evt.country,
            email: evt.email,
            displayName: evt.display_name,
            userUrl: evt.external_urls.spotify,
            followerNum: evt.followers.total,
            userHref: evt.href,
            proilePic: 'https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png',
            accountType: evt.product,
            userUri: evt.uri,
            spotifyId: evt.id,
        })
        Spotify.getMyPlaylists(this.state.accessToken, this.getPlaylistsSuccess, this.getPlaylistsError)
    }
    onUserError = evt => {
        console.log('get user profile data failed', evt)
    }

    getPlaylistsSuccess = evt => {
        // this.mapPlaylists();
        console.log('playlist success ')
        console.log('this should be the client id:', process.env.DB_SPOTIFY_CLIENT_ID)
        this.setState({
            ...this.state,
            playlists: evt.items
        })
        Spotify.getMyTopTracks(this.state.accessToken, this.getTopTracksSuccess, this.getTopTracksError)
    }

    getPlaylistsError = evt => console.log('playlist error ', evt)


    getTopTracksSuccess = evt => {
        console.log('top tracks success')

        this.setState({
            ...this.state,
            topTracks: evt.items
        })

        Spotify.getTopArtists(this.state.accessToken, this.getTopArtistsSuccess, this.getTopArtistsError)
    }



    getTopTracksError = evt => {
        console.log('top tracks failed', evt)
    }

    getTopArtistsSuccess = evt => {
        console.log('top artists succes: ')
        this.setState({
            ...this.state,
            topArtists: evt.items
        })
    }

    getTopArtistsError = err => {
        console.log('get top artists failed!!!! ', err)
    }

    previousArrowClicked = evt => {
        this.setState({
            ...this.state,
            activeIndex: 0,
        })
    }

    onChange = evt => {
        const key = evt.target.name;
        const val = evt.target.value;
        console.log(key, val)
        this.setState(
            {
                [key]: val
            })
    }

    onTrackClick = evt => {
        console.log("****************THIS TRACK CLICKED", evt.target.getAttribute('data-item'))
    }

    onArtistClick = evt => {
        console.log("(@*#)(%*#)@(*%)#(      ARTIST CLICKED ", evt.target.getAttribute('data-item'))
        var id = evt.target.getAttribute('data-item')
        Spotify.getArtist(id, this.state.accessToken, this.onArtistSuccess, this.onArtistError)
        Spotify.getArtistAlbums(id, this.state.accessToken, this.onArtistAlbumsSuccess, this.onArtistAlbumsError)
        Spotify.getArtistTopTracks(id, this.state.accessToken, this.onArtistTopTracksSuccess, this.onArtistTopTracksError)
        Spotify.getRelatedArtists(id, this.state.accessToken, this.onArtistRelatedArtistsSuccess, this.onArtistRelatedArtistsError)
    }

    onArtistAlbumsSuccess = response => {
        console.log('artist albums success', response)
    }

    onArtistAlbumsError = err => {
        console.log('artist albums error', err)
    }

    onArtistTopTracksSuccess = response => {
        console.log('artist top Tracks success', response)
    }

    onArtistTopTracksError = err => {
        console.log('artist top Tracks error', err)
    }

    onArtistRelatedArtistsSuccess = response => {
        console.log('artist RelatedArtists success', response)
    }

    onArtistRelatedArtistsError = err => {
        console.log('artist RelatedArtists error', err)
    }

    onArtistSuccess = response => {
        console.log('artist  success', response)
    }

    onArtistError = err => {
        console.log('artist  error', err)
    }

    onSearchClicked = evt => {
        console.log(`search clicked for ${this.state.keyword}`)
        evt.preventDefault();
        Spotify.getSearchResults(this.state.accessToken, this.state.keyword, this.onSearchSuccess, this.onSearchError)

    }
    onSearchSuccess = response => {
        console.log("search successful: ", response)
    }

    onSearchError = err => {
        console.log("search unsuccessful: ", err)
    }


    toggleFalafelDrawer = (evt) => {
        // this.onClickRef.current.focus();
        console.log('(item clicked, togggle drawer', evt.target.playlist)
        console.log('(item clicked, togggle drawer', evt.target.ref)
        this.setState({
            ...this.state,
            open: false,
            falafelOpen: true,
            active: evt.target.id,
            progressBarOneActive: true,
            activeItem: evt.target.variant,
        })

        Spotify.getCurrentPlaylist(this.state.accessToken, evt.target.id, this.getCurrentPlaylistSuccess, this.getCurrentPlaylistError)
        Spotify.getPlaylistTracks(this.state.accessToken, evt.target.id, this.getPlaylistTraxSuccess, this.getPlaylistTraxError)
        // Spotify.getCurrentPlaylistCover(this.state.accessToken, evt.target.id, this.getPlaylistCoverSuccess, this.getPlaylistCoverError)
    }

    getPlaylistCoverSuccess = evt => {
        console.log('get current playlist cover success', evt)

        this.setState({
            activePlaylistCover: evt[0].url
        })
    }

    getPlaylistCoverError = err => {
        console.log('get playlist cover err: ', err)
    }

    getCurrentPlaylistSuccess = (evt) => {
        console.log('get current playlist success', evt)
        this.setState({
            ...this.state,
            activeItem: evt,
            activePlaylistTracks: evt.tracks.items,
            activePlaylistCover: evt.images[0].url

        })
    }

    getCurrentPlaylistError = err => {
        console.log('get current playlist err: ', err)
    }

    // This is only called on mount - yay!
    onRefMount(ref) {
        this.onClickRef = ref;
    }

    getPlaylistTraxSuccess = evt => {
        console.log('get playlist tracks success')
        // this.setState({
        //     ...this.state,
        //     activePlaylistTracks: evt.items,
        // })
    }

    getPlaylistTraxError = err => {
        console.log("playlist trax err: ", err)
    }



    componentDidMount() {
        // window.location = 'http://localhost:8888/loginSpotify'
        const parsed = queryString.parse(window.location.search);
        const accessToken = parsed.access_token
        this.setState({
            accessToken: accessToken,
        }, () => console.log('this.state after componenetDidMount: ', this.state))
        console.log(parsed)


        if (typeof accessToken == 'string') {
            // console.log('get user data call started', this.state.accessToken)
            // this.props.getUserData(this.state.accessToken)
        }
    }
    render() {
        console.log('this state=======', this.state)
        return (
            <React.Fragment>
                <Container fluid className="layout-container-0padding" >
                    {/* style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${this.state.backgroundPath}")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "1% 1%" }}  */}
                    <div className="layout-inner" >

                        <div className="layout-navbar sticky-top">
                            {/* <Container fluid> */}

                            <Row className="navbar-row" >
                                <Col className='nav-container-col'>
                                    <header>
                                        <NavBar
                                            direction={this.state.direction}
                                            handleSelect={this.previousArrowClicked}
                                            activeSlide={this.state.activeSlide}
                                            activeIndex={this.state.activeIndex}
                                            selectedMovie={this.state.selectedMovie}
                                            progressBarOneActive={this.state.progressBarOneActive}
                                            progressBarTwoActive={this.state.progressBarTwoActive}
                                            toggleClose={this.closeWofeesDrawer}
                                            active={this.state.active}
                                            backgroundPath={this.state.backgroundPath}
                                            videoPath={this.state.videoPath}
                                            falafelOpen={this.state.falafelOpen}
                                            onGetSpotProfileClick={this.onGetSpotProfileClick}
                                            open={this.state.open}
                                            value={this.state.keyword}
                                            onClick={this.onSearchClicked}
                                            onChange={this.onChange}
                                            time={this.state.time}
                                            activePlaylistTracks={this.state.activePlaylistTracks}
                                            activeItem={this.state.activeItem}
                                            activePlaylistCover={this.state.activePlaylistCover}
                                            onTrackClick={this.onTrackClick}
                                        />
                                    </header>
                                </Col>

                            </Row>

                        </div>
                        <div className="layout-container">
                            {/* <Container> */}

                            <div className="layout-content">
                                <div className="container-fluid">
                                    <Row>
                                        {this.state.topArtists && (

                                            <ContentRouter
                                                ref={this.onRefMount}
                                                active={this.state.active}
                                                toggleFalafelDrawer={this.toggleFalafelDrawer}
                                                topTracks={this.state.topTracks}
                                                playlists={this.state.playlists}
                                                topArtists={this.state.topArtists}
                                                onArtistClick={this.onArtistClick}
                                            />
                                        )}
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <header>
                                        {/* <Footer /> */}
                                    </header>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </React.Fragment >
        )
    }
}

export default withRouter(Layout)
