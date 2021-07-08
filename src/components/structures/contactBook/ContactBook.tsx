import React, { FC, useContext } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import { Context } from "../../../context/context";
import { ContactBookProvider } from "../../../context/ContactBook/contextContactBook";

const ContactBook: FC = (props) => {
    const { page } = useContext(Context);

    return (

        <div className="sumra-contact-book-main ">
            <SidebarContactBook />
            <ContactBookProvider>
                {page}
            </ContactBookProvider>

        </div>

    );
};

export default ContactBook;

