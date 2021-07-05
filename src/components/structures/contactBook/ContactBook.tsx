import React, { FC } from "react";
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import AllContacts from "../../views/contactBook/AllContacts";
import MyFavourites from "../../views/contactBook/MyFavourites";

const ContactBook: FC = () => {
    const { path } = useRouteMatch();

    return (
        <div className="sumra-contact-book-main ">
            <SidebarContactBook />
            <Switch>
                <Route path={`${path}/all_contacts`} component={AllContacts} />
                <Route path={`${path}/my_favourites`} component={MyFavourites} />
                {/*  <Route path={`${path}/recently_added`} component={RecentlyAdded} />
                <Route path={`${path}/referred_contact_book`} component={ReferredContactBook} />
                <Route path={`${path}/contact_cash`} component={ContactCash} /> */}
                <Route path="/" component={AllContacts} />
            </Switch>

        </div>
    );
};

export default ContactBook;
