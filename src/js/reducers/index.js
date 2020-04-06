import { DATA_LOADING, DATA_LOADED, DATA_IMAGE_LOADED } from '../constants/action-types'

const initialState = {
    loading: true,
    dogs: {},
    dogs_images: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_LOADING:
            return Object.assign({}, state, {
                loading: action.payload
            })
        case DATA_LOADED:
            return Object.assign({}, state, {
                dogs: action.payload,
                loading: false
            });
        case DATA_IMAGE_LOADED:
            return Object.assign({}, state, {
                dogs_images: {
                    ...state.dogs_images,
                    [action.key]: action.payload
                }
            });
        default:
            break;
    }
    return state;
}

export default rootReducer
