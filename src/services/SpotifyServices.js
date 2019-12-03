import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

class Spotify {
    static authorize(onSuccess, onError) {
        // console.log('this is the clientId: ', clientId)
        const url = `https://accounts.spotify.com/authorize`;
        const config = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(url, config)
            .then(response => onSuccess(response))
            .catch(err => onError(err))
    }

    static getUser(authToken, onSuccess, onError) {
        // console.log('this is the auth token being passed for top tracks', authToken)
        const url = "https://api.spotify.com/v1/me";
        const myAuthToken = authToken;
        const headers = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(`https://api.spotify.com/v1/me`, { headers: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    static getMyPlaylists(authToken, onSuccess, onError) {
        const url = `https://api.spotify.com/v1/me/playlists?limit=50`;
        const myAuthToken = authToken;
        const headers = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    static getMyTopTracks(authToken, onSuccess, onError) {
        // console.log('this is the auth token being passed for top tracks', authToken)
        const url = `https://api.spotify.com/v1/me/top/tracks`
        const myAuthToken = authToken
        const headers = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    static getRecentlyPlayed(authToken, onSuccess, onError) {
        // console.log('getting recently played tracks', authToken)
        const url = `https://api.spotify.com/v1/me/player/recently-played?limit=50`
        const myAuthToken = authToken
        const myHeaders = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(`https://api.spotify.com/v1/me/player/recently-played?limit=50`, { myHeaders: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response))
            .catch(err => onError(err))
    }

    static getPlaylistTracks(authToken, playlistId, onSuccess, onError) {
        // console.log('getting tracks for this playlist with this authtoken: ', playlistId, authToken)
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=0&limit=50`
        const myAuthToken = authToken
        const myHeaders = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        }
        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers: { 'Authorization': 'Bearer ' + authToken } })

            .then(response => {
                console.log('this is the response from getting playlist tracks: ', response)
                onSuccess(response.data)
            })
            .catch(err => {
                console.log('this is the get playlist tracks error: ', err)
                onError(err)
            })
    }


    static getTopArtists(authToken, onSuccess, onError) {
        // console.log('this is the auth token being passed for top tracks', authToken)
        const url = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50";
        const myAuthToken = authToken;
        const headers = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50`, { headers: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }


    static getSearchResults(authToken, keyword, onSuccess, onError) {
        // console.log('this is the auth token being passed for top tracks', authToken)
        const url = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50";
        const myAuthToken = authToken;
        const headers = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(`https://api.spotify.com/v1/search?q=${keyword}&type=album%2Ctrack%2Cartist&limit=15`, { headers: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    static getCurrentPlaylist(authToken, playlistId, onSuccess, onError) {
        const myAuthToken = authToken;
        const headers = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    static getCurrentPlaylistCover(authToken, playlistId, onSuccess, onError) {
        const myAuthToken = authToken;
        const headers = {
            clientId: process.env.DB_SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirectUri: process.env.DB_REDIRECT_URI
        };
        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/images`, { headers: { 'Authorization': 'Bearer ' + myAuthToken } })
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }


    static createPlaylist(authToken, body, onSuccess, onError) {
        console.log('creating a new playlist...')
        console.log('new playlist Name: ', body.name)
        console.log('new playlist Description: ', body.description)
        console.log('Is new playlist public?: ', body.public)
        console.log('creating a new playlist...')
        console.log(' here is my authToken: ', authToken)
        const url = `https://api.spotify.com/v1/playlists`
        const myAuthToken = authToken
    }

    static getMyTopTracks

}
export default Spotify