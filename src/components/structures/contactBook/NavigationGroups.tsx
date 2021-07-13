import React, { FC, useState, useContext } from 'react';
import classNames from 'classnames';
import { Context } from "../../../context/context";

const NavigationGroups: FC = ({isOpen}) => {
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);
    const { setPage } = useContext(Context);


    return (

        <ul className={isOpen ?"metismenu list-unstyled": "display-none" } id="side-menu" >
            <li

            ><a href="/#/contact_book"
                    className={classNames("contact-book__item", {
                "contact-book__item-active": allContactsBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(true);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
                        setPage("allContacts");
                    }}
                >
                    <i className="icon-User" />
                    <span>family</span>
                </a>

            </li>

            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("contact-book__item", {
            "contact-book__item-active": myFavouritesBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(true);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
                        setPage("myFavourites");
                    }}
                >
                    <i className="icon-Star" />
                    <span>my trust circle</span>
                </a>
            </li>

            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("contact-book__item", {
            "contact-book__item-active": recentlyAddedBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(true);
                        setReferredContactBook(false);
                        setPage("recentlyAdded");
                    }}
                >
                    <i className="icon-Alarm" />
                    <span>friends</span>
                    <span className="contact-book__unread">25</span>
                </a>
            </li>
            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("contact-book__item", {
            "contact-book__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setPage("referred");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>collegues</span>
                    <span className="contact-book__unread">12</span>
                </a>
            </li>
        </ul>
   
   );
};
export default NavigationGroups;
