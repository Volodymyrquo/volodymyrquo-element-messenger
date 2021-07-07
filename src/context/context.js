import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import AllContacts from "../components/views/contactBook/AllContacts";
import MyFavourites from "../components/views/contactBook/MyFavourites";
import Referred from "../components/views/contactBook/Referred";
import RecentlyAdded from "../components/views/contactBook/RecentlyAdded";
import { initialState } from "./contextReducer";

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    const setPage = (id) =>
        dispatch({
            type: "SET_PAGE",
            payload: id,
        });

    const pages = {
        myFavourites: <MyFavourites />,
        allContacts: <AllContacts />,
        recentlyAdded: <RecentlyAdded />,
        referred: <Referred />,
    };
    const page = pages[state.pageId];
    return (
        <Context.Provider value={{ setPage, page }}>
            {children}
        </Context.Provider>
    );
};
