import axios from "axios";

export const FETCHING_MEME_START = 'FETCHING_MEME_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';

export const fetchMeme = meme => {
    console.log(meme);
    return dispatch => {
        dispatch({ type: FETCHING_MEME_START })
        axios
            .get(`https://api.imgflip.com/get_memes`)
            .then(res => {
                console.log(res.data.data.memes);
                dispatch({  type: FETCHING_DATA_SUCCESS, payload: res.data.data.memes });
            })
            .catch(err => {
                console.log(err);
            })
    }
};

// const thunk = (action) => (next) => store {
//     if( typeof action === 'function') {
//         action(store.dispatch);
//     } else if ( typeof action === 'object') {
//         next(action);
//     }
// };