import React, { useReducer, createContext } from "react";
import reducerContactBook from "./reducerContactBook";
import { initialState } from "./reducerContactBook";
import {
    USERS_TYPE,
    SEARCH_PEOPLE,
    SEARCH_TEXT,
    REVERSE_TYPE,
    SEND_LETTER,
    DOWNLOAD_SMS,
    SEARCH_GROUP,
} from "./actionTypes";

export const ContactBookContext = createContext(initialState);

export const ContactBookProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerContactBook, initialState);
    const actions = {
        getAllUsers: (users) =>
            dispatch({
                type: USERS_TYPE,
                users,
            }),
        getGroup: (groupName) =>
            dispatch({
                type: SEARCH_GROUP,
                groupName,
            }),
        getSearchPeople: (searchPeople) =>
            dispatch({
                type: SEARCH_PEOPLE,
                searchPeople,
            }),
        getSearchText: (searchText) =>
            dispatch({
                type: SEARCH_TEXT,
                searchText,
            }),
        performUnfolding: (reverse) =>
            dispatch({
                type: REVERSE_TYPE,
                reverse,
            }),
        getLetter: (sendLetter) =>
            dispatch({
                type: SEND_LETTER,
                sendLetter,
            }),
        dovnloadSend: (download) =>
            dispatch({
                type: DOWNLOAD_SMS,
                download,
            }),
    };

    return (
        <ContactBookContext.Provider value={{ state, actions }}>
            {children}
        </ContactBookContext.Provider>
    );
};
