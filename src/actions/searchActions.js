import { actionType, route } from "../constants";
import axios from "../api/axios";

export const getSearchProducts = async(dispatch, searchTerm) => {
    dispatch({
        type: actionType.GET_SEARCH_RESULT_REQUEST
    });

    try{
        const { data } = await axios.get(route.PRODUCTS_ALL_URL + `/search?q=${searchTerm}`);
        dispatch({
            type: actionType.GET_SEARCH_RESULT_SUCCESS,
            payload: data.products
        });
    } catch(error){
        dispatch({
            type: actionType.GET_SEARCH_RESULT_FAIL,
            payload: error.message
        });
    }
}
