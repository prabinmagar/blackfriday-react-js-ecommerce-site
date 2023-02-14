import React, { createContext, useReducer, useContext} from "react";
import rootReducer from "../reducers";
import { makeAuthRequest, logout } from "../actions/authActions";
import { fetchFromLocalStorage } from "../utils/helpers";

const fetchAuthData = () => {
    let authData = fetchFromLocalStorage("authData");
    if(authData.length === 0) return authData = { isLoggedIn: false, info: {} }
    return authData;
}

const initialState = {
    authLoading: false,
    authError: false,
    authData: fetchAuthData(),
    authErrorMsg: ""
}

const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer.auth, initialState);

    return (
        <AuthContext.Provider value = {{
            ...state,
            makeAuthRequest,
            dispatch,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}