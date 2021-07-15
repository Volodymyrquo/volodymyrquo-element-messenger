import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import TableContacts from "../components/views/contactBook/TableContacts";
import TableReferred from "../components/views/contactBook/TableReferred";
import TableGroupsItem from "../components/views/contactBook/TableGroupsItem";
import ContactBookPage from "../components/views/contactBook/ContactBookPage";
import ImportContactsModal from "../components/views/contactBook/ImportContactsModal/ImportContactsModal";
import ImportLoaderModal from "../components/views/contactBook/ImportContactsModal/ImportLoaderModal";
import SendReferralModal from "../components/views/contactBook/SendReferralModal/SendReferralModal";
import SendModal from "../components/views/contactBook/SendReferralModal/SendModal";
import SendingMessage from "../components/views/contactBook/SendReferralModal/PercentageSentModal";
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
    const setBurger = (burger) =>
        dispatch({
            type: "SET_BURGER",
            payload: burger,
        });

    const pages = {
        contactBook: <ContactBookPage />,
        importContacts: <ImportContactsModal />,
        importLoader: <ImportLoaderModal />,
        contactCash: <ContactCash />,
        sendReferral: <SendReferralModal />,
        sendModal: <SendModal />,
        sendingMessage: <SendingMessage />,
    };
    const tables = {
        myFavourites: <TableContacts />,
        allContacts: <TableContacts />,
        recentlyAdded: <TableContacts />,
        referred: <TableReferred />,
        groupsItem: <TableGroupsItem />,
    };
    const table = tables[state.tableId];
    const page = pages[state.pageId];
    const { params } = state;
    return (
        <Context.Provider
            value={{
                setPage,
                setParams,
                setTable,
                setBurger,
                page,
                params,
                table,
            }}
        >
            {children}
        </Context.Provider>
    );
};
