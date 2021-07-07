import React, { FC, useContext } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import { Context } from "../../../context/context";

const ContactBook: FC = (props) => {
    const { page } = useContext(Context);

    return (

        <div className="sumra-contact-book-main ">
            <SidebarContactBook />

            {page}

        </div>

    );
};

export default ContactBook;

