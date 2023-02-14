import React, {createContext, useContext, useReducer} from "react";
import rootReducer from "../reducers";
import { getSearchProducts } from "../actions/searchActions";

const initialState = {
    searchTerm: "",
    searchResult: [],
    searchLoading: false,
    searchError: false,
    searchErrorMsg: "",
}

const SearchContext = createContext({});
export const SearchProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer.search, initialState);

    return (
        <SearchContext.Provider value = {{
            ...state,
            dispatch,
            getSearchProducts,
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    return useContext(SearchContext);
}