import axios from 'axios';
import {popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl} from '../api'

// action creator

export const loadGames = () => async (dispatch) => {
    // fetch axios
    const popularData = await axios.get(popularGamesUrl())
    const upcomingData = await axios.get(upcomingGamesUrl())
    const newGamesData = await axios.get(newGamesUrl())
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const fetchGames = await axios.get(searchGameUrl(game_name))

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: fetchGames.data.results,
        }
    })
}