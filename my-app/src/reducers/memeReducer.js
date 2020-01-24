import {FETCHING_MEME_START, FETCHING_DATA_SUCCESS} from '../actions/index';

const initialState = {
    isLoading: false,
    memes: null,
    error: ''
};

export const memeReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type) {
        case FETCHING_MEME_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                meme: action.payload
            }
        default:
            return state
    }
}