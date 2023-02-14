import { actionType } from "../constants";
import { constants } from "../constants";

const filterReducer = (state, action) => {
    switch(action.type){
        case actionType.SET_GRIDVIEW:
            return {
                ...state,
                grid_view: true
            }
        case actionType.SET_LISTVIEW:
            return {
                ...state,
                grid_view: false
            }
        case actionType.LOAD_PRODUCTS:
            return {
                ...state,
                filtered_products: [...action.payload]
            }
        case actionType.PRICE_SORT:
            let tempProducts = state.products;
            if(action.payload === constants.BEST_MATCH){
                tempProducts = state.products;
            }

            if(action.payload === constants.LOW_TO_HIGH){
                tempProducts = tempProducts.sort((productA, productB) => productA.price - productB.price);
            }

            if(action.payload === constants.HIGH_TO_LOW){
                tempProducts = tempProducts.sort((productA, productB) => productB.price - productA.price);
            }

            return {
                ...state,
                filtered_products: tempProducts
            }
        case actionType.SET_SELECT_ALL:
            return {
                ...state,
                selectAll: action.payload
            }
        default: 
            return state;
    }
}

export default filterReducer;