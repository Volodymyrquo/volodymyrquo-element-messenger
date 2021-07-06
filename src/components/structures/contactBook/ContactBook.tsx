import React, { FC, useState } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import AllContacts from "../../views/contactBook/AllContacts";
import MyFavourites from "../../views/contactBook/MyFavourites";
import { Context } from "../../../context/context";
import Referred from "../../views/contactBook/Referred";
import RecentlyAdded from "../../views/contactBook/RecentlyAdded";

const ContactBook: FC = (props) => {
    const [pageName, setPageName] = useState("allContacts");

    const getPage = () => {
        switch (pageName) {
            case "myFavourites":
                return <MyFavourites />;
            case "allContacts":
                return <AllContacts />;
 case "recentlyAdded":
                return <RecentlyAdded />;
            case "referred":
                return <Referred />;

            default:
                return <AllContacts />;
        }
    };

    const page = getPage();
    const setPage = (pageId) => {
        setPageName(pageId);
    };

    return (
        <Context.Provider value={{ setPage }}>
            <div className="sumra-contact-book-main ">
                <SidebarContactBook />

                {page}

            </div>
        </Context.Provider>
    );
};

export default ContactBook;

