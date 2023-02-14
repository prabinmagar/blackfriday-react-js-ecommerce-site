import { actionType } from "../constants";

export const addToBasket = (dispatch, newProduct) => {
    dispatch({
        type: actionType.ADD_TO_BASKET,
        payload: newProduct
    });
};

export const clearBasket = (dispatch) => {
    dispatch({
        type: actionType.CLEAR_BASKET,
    });
};

export const addQtyItem = (dispatch, id) => {
    dispatch({
        type: actionType.ADD_QTY_ITEM,
        payload: id
    });
};

export const minusQtyItem = (dispatch, id) => {
    dispatch({
        type: actionType.MINUS_QTY_ITEM,
        payload: id
    });
};

export const removeFromBasket = (dispatch, id) => {
    dispatch({
        type: actionType.REMOVE_FROM_BASKET,
        payload: id
    });
};

export const getBasketTotal = (dispatch) => {
    dispatch({
        type: actionType.GET_BASKET_TOTAL,
    });
};

export const setBasketMsgOn = (dispatch) => {
    dispatch({
        type: actionType.SET_BASKET_MSG_ON,
        payload: true
    });
};

export const setBasketMsgOff = (dispatch) => {
    dispatch({
        type: actionType.SET_BASKET_MSG_OFF,
        payload: false
    });
};