import { MESSAGE } from '../constants/action-types';
//---------------------------------------------------------------------------
export function getData(url, type_data, key) {
    return function (dispatch) {
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: type_data, payload: json[MESSAGE], key: key });
            }).catch(error => {
                console.log(error);
            });
    };
}