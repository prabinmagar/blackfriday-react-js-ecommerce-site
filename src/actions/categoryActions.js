import { actionType, route } from "../constants/index";
import axios from "../api/axios";

export const getCategoriesList = async(dispatch) => {
    dispatch({ type: actionType.CATEGORY_LIST_REQUEST });
    try{
        const { data } = await axios.get(route.CATEGORY_URL);
        dispatch({ type: actionType.CATEGORY_LIST_SUCCESS, payload: data })
    } catch(error) {
        dispatch({
            type: actionType.CATEGORY_LIST_FAIL,
            payload: error.message
        });
    }
};

export const getCategoryProducts = async(dispatch, categoryKey) => {
    dispatch({type: actionType.CATEGORY_PRODUCT_REQUEST});
    try{
        const { data } = await axios.get(route.CATEGORY_PRODUCT_URL + `${categoryKey}`);
        dispatch({ 
            type : actionType.CATEGORY_PRODUCT_SUCCESS, payload: data.products
        });
    } catch(error){
        dispatch({
            type: actionType.CATEGORY_PRODUCT_FAIL, 
            payload: error.message
        });
    }
};