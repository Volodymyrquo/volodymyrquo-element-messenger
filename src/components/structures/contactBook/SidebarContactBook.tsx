import React, { FC, useState } from 'react';
import logo from '../../../../res/images/contactBook/logo.svg';
import NavigationSidebar from './NavigationSidebar';
import { Link, useRouteMatch } from "react-router-dom";
import plus from "../../../../res/images/contactBook/plus.svg";

const SidebarContactBook: FC = () => {
    const [burger, setBurger] = useState(true);
    const match = useRouteMatch();
    console.log(match);
    return (
        <section
            className={burger ?"contact-book__sidebar-block" : "contact-book__sidebar-block-visible"}
        >
            <div>
                <img
                    className="contact-book__logo-img"
                    src={logo}
                    alt="logo on the page Contact Book"
                />
                <div
                    id="menuNone"
                    onClick={()=>{
                        setBurger(!burger);
                    }}
                >
                </div>
            </div>
            <h3 className="contact-book__title-sidebar">Contacts</h3>
            <NavigationSidebar />

            <h3 className="contact-book__title-sidebar">Groups</h3>

            <Link to="" className="contact-book__add-new-group">
                <img
                    src={plus}
                    alt="plus"
                />
                <span>add new group</span>
            </Link>

            <Link
                to={{ pathname: "/contactBook/all_contacts", search: '?import-contacts=true' }}
                className="contact-book__btn-import"
            >
                <i className="icon-Swap" />
                <span>Import</span>
            </Link>

            <button className="contact-book__btn-import">
                <i className="icon-Download" />
                <span>Export</span>
            </button>

            <div className="contact-book__more-wrapper">
                <p className="contact-book__desc">
          Get up to $250 for Referrals.<br />
          Earn Unlimited.
                </p>
                <Link
                    to="/referrals"
                    className="contact-book__more-btn"
                >
          Learn more
                </Link>
            </div>
        </section>
    );
};
export default SidebarContactBook;
