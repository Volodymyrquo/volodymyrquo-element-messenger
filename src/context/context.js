import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import TableContacts from "../components/views/contactBook/TableContacts";
import TableReferred from "../components/views/contactBook/RefferedContactBook/TableReferred";
import GroupsItem from "../components/views/contactBook/Groups/GroupsItem";
import ContactBookPage from "../components/views/contactBook/ContactBookPage";
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
    const setTable = (id) =>
        dispatch({
            type: "SET_TABLE",
            payload: id,
        });

    const setParams = (params) =>
        dispatch({
            type: "SET_PARAMS",
            payload: params,
        });

    const pages = {
        contactBook: <ContactBookPage />,
        importContacts: <ImportContactsModal />,
        importLoader: <ImportLoaderModal />,
        contactCash: <ContactCash />,
        groupsItem: <GroupsItem />,
    };
    const tables = {
        myFavourites: <TableContacts />,
        allContacts: <TableContacts />,
        recentlyAdded: <TableContacts />,
        referred: <TableReferred />,
    };
    const table = tables[state.tableId];
    const page = pages[state.pageId];
    const { params } = state;
    return (
        <Context.Provider
            value={{ setPage, setParams, setTable, page, params, table }}
        >
            {children}
        </Context.Provider>
    );
};
