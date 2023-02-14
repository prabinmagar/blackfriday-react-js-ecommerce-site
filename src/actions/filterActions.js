import { actionType } from "../constants";

export const setGridView = (dispatch) => {
    dispatch({
        type: actionType.SET_GRIDVIEW
    });
}

export const setListView = (dispatch) => {
    dispatch({
        type: actionType.SET_LISTVIEW
    });
}

export const loadProducts = (dispatch, products) => {
    dispatch({
        type: actionType.LOAD_PRODUCTS, payload: products
    });
}

export const priceSort = (dispatch, event) => {
    const priceSortType = event.target.value;
    dispatch({
        type: actionType.PRICE_SORT,
        payload: priceSortType
    });
}

export const setSelectAll = (dispatch, checkStatus) => {
    dispatch({
        type: actionType.SET_SELECT_ALL,
        payload: checkStatus
    });
}
