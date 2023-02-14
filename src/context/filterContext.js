import React, { createContext, useContext, useReducer, useEffect } from "react";
import rootReducer from "../reducers";
import { setGridView, setListView, priceSort, loadProducts, setSelectAll } from "../actions/filterActions";
import { useProductContext } from "./productContext";
import { actionType } from "../constants";
import { constants } from "../constants";

const initialState = {
    filtered_products: [],
    products: [],
    grid_view: true,
    sort: constants.BEST_MATCH,
    filters: {
        category: 'all',
        brand: 'all',
        min_price: 0,
        max_price: 0,
        rating: '4'
    },
    selectAll: false
}

const FilterContext = createContext({});
export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer.filter, initialState);
    const { products } = useProductContext();

    useEffect(() => {
        dispatch({ type: actionType.LOAD_PRODUCTS, payload: products});
    }, [products]);


    useEffect(() => {
        if(products.length > 0){
            dispatch({ type: actionType.PRICE_SORT });
        }
    }, [products, state.sort]);

    return (
        <FilterContext.Provider value = {{
            ...state,
            setGridView, 
            setListView,
            dispatch,
            priceSort,
            loadProducts,
            setSelectAll

        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}