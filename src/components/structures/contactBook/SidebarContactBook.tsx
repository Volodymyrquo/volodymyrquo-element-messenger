import React, { FC, useState} from 'react';
import logo from "../../../../res/images/contactBook/logo.svg";
import NavigationSidebar from './NavigationSidebar';
import plus from "../../../../res/images/contactBook/plus.svg";

const SidebarContactBook: FC = () => {
    const [burger, setBurger] = useState(true);
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
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span id="span1"></span>
                        <span id="span2"></span>
                        <span id="span3"></span>
                    </div>
                </div>
            </div>
            <h3 className="contact-book__title-sidebar">Contacts</h3>
            <NavigationSidebar />

            <h3 className="contact-book__title-sidebar">Groups</h3>

            <a href="" className="contact-book__add-new-group">
                <img
                    src={plus}
                    alt="plus"
                />
                <span>add new group</span>
            </a>

            <a
                href={{ pathname: "/contactBook/all_contacts", search: '?import-contacts=true' }}
                className="contact-book__btn-import"
            >
                <i className="icon-Swap" />
                <span>Import</span>
            </a>

            <button className="contact-book__btn-import">
                <i className="icon-Download" />
                <span>Export</span>
            </button>

            <div className="contact-book__more-wrapper">
                <p className="contact-book__desc">
          Get up to $250 for Referrals.<br />
          Earn Unlimited.
                </p>
                <a
                    href="/referrals"
                    className="contact-book__more-btn"
                >
          Learn more
                </a>
            </div>
        </section>
    );
};
export default SidebarContactBook;
