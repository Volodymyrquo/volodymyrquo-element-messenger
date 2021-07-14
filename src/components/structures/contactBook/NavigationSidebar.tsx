import React, { FC, useState, useContext } from 'react';
import classNames from 'classnames';
import { Context } from "../../../context/context";

const NavigationSidebar: FC = () => {
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);
    const { setPage, setTable, setParams } = useContext(Context);

    return (
        <ul className="metismenu list-unstyled" id="side-menu">
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
                        setPage("contactBook");
                        setTable("allContacts");
                        setParams({ name: "All contacts" });
                    }}
                >
                    <i className="icon-User" />
                    <span>All contacts</span>
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
                        setTable("myFavourites");
                        setPage("contactBook");
                        setParams({ name: "My favourites" });

                    }}
                >
                    <i className="icon-Star" />
                    <span>My favourites</span>
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
                        setTable("recentlyAdded");
                        setPage("contactBook");
                        setParams({ name: "Recently added" });

                    }}
                >
                    <i className="icon-Alarm" />
                    <span>Recently added</span>
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
                        setTable("referred");
                        setPage("contactBook");
                        setParams({ name: "Referred" });

                    }}
                >
                    <i className="icon-Cube" />
                    <span>Referred</span>
                    <span className="contact-book__unread">12</span>
                </a>
            </li>
        </ul>
    );
};
export default NavigationSidebar;
