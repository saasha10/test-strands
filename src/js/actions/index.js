import { MESSAGE, DATA_LOADING } from '../constants/action-types';
//---------------------------------------------------------------------------
export const fetchData = bool => ({
    type: DATA_LOADING,
    payload: bool
})

export function getData(url, type_data, key) {
    return function (dispatch) {
        if(key === undefined)
            dispatch(fetchData(true))
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: type_data, payload: json[MESSAGE], key })
            }).catch(error => {
                console.log(error);
            });
    };
}