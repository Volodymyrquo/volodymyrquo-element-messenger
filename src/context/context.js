import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import AllContacts from "../components/views/contactBook/AllContacts";
import MyFavourites from "../components/views/contactBook/MyFavourites";
import Referred from "../components/views/contactBook/RefferedContactBook/ReferredContactBook";
import RecentlyAdded from "../components/views/contactBook/RecentlyAdded";
import ImportContactsModal from "../components/views/contactBook/ImportContactsModal/ImportContactsModal";
import ImportLoaderModal from "../components/views/contactBook/ImportContactsModal/ImportLoaderModal";
import ContactCash from "../components/views/contactBook/ContactCash";
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
        importContacts: <ImportContactsModal />,
        importLoader: <ImportLoaderModal />,
        contactCash: <ContactCash />,
    };
    const page = pages[state.pageId];
    return (
        <Context.Provider value={{ setPage, page }}>
            {children}
        </Context.Provider>
    );
};
