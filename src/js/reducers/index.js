import { DATA_LOADED } from '../constants/action-types';
import { DATA_IMAGE_LOADED } from '../constants/action-types';
//---------------------------------------------------------------------------
const initialState = {
    dogs: {},
    dogs_images: {}
};
//---------------------------------------------------------------------------
function rootReducer(state = initialState, action) {
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            dogs: action.payload
        });
    }
    else if(action.type === DATA_IMAGE_LOADED){
        return Object.assign({}, state, {
            dogs_images: {
                ...state.dogs_images,
                [action.key]: action.payload
            }
        });
    }

    return state;
}
//---------------------------------------------------------------------------
export default rootReducer;