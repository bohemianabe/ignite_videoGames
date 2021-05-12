import axios from 'axios';
import {gameDetailsUrl, gameScreenshotUrl} from '../api'

export const loadDetail = (id) => async (dispatch) => {
    const detail = await axios.get(gameDetailsUrl(id))
    const screenShotData = await axios.get(gameScreenshotUrl(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detail.data,
            screen: screenShotData.data
        }
    })
}