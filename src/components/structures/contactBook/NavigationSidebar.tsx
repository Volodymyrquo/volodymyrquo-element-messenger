import React, { FC, useState } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import './NavigationSidebar.css';
import classNames from 'classnames';

const NavigationSidebar: FC = () => {
    const { url } = useRouteMatch();
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);

    return (
        <ul className="metismenu list-unstyled" id="side-menu">
            <li>
                <Link
                    to={`${url}/all_contacts`}
                    className={classNames("contact-book__item", {
            "contact-book__item-active": allContactsBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(true);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
                    }}
                >
                    <i className="icon-User" />
                    <span>All contacts</span>
                </Link>
            </li>

            <li>
                <Link
                    to={`${url}/my_favourites`}
                    className={classNames("contact-book__item", {
            "contact-book__item-active": myFavouritesBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(true);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
                    }}
                >
                    <i className="icon-Star" />
                    <span>My favourites</span>
                </Link>
            </li>

            <li>
                <Link
                    to={`${url}/recently_added`}
                    className={classNames("contact-book__item", {
            "contact-book__item-active": recentlyAddedBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(true);
                        setReferredContactBook(false);
                    }}
                >
                    <i className="icon-Alarm" />
                    <span>Recently added</span>
                    <span className="contact-book__unread">25</span>
                </Link>
            </li>
            <li>
                <Link
                    to={`${url}/referred_contact_book`}
                    className={classNames("contact-book__item", {
            "contact-book__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                    }}
                >
                    <i className="icon-Cube" />
                    <span>Referred</span>
                    <span className="contact-book__unread">12</span>
                </Link>
            </li>
        </ul>
    );
};
export default NavigationSidebar;
