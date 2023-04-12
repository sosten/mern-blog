import { createContext, useReducer } from "react";

export const Store = createContext();

const intialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null        
}

const reducer = (state, action) => {
    switch(action.type){
        case "USER_REGISTER":
            return {...state, userInfo: action.payload}
        case "USER_LOGIN":
            return {...state, userInfo: action.payload}
        case "USER_LOGOUT":
            return {...state, userInfo: null}
        default:
            return state
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, intialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}