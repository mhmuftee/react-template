import {FETCH_POSTS, DROOV_DATA} from "../actions/types";

const initialState = {
    items: [],
    item: {},
    droovItems: []
}

export default function (state = initialState, action){
        if (action.type ===FETCH_POSTS) {
            return {
                ...state,
                items: action.payload
            }
        } else if (action.type === DROOV_DATA) {
            return {
                ...state,
                droovItems: action.payload
            }
         } else  return state;
}
