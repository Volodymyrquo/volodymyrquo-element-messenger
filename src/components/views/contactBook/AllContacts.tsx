import React, { FC } from 'react';
import notification from "../../../../res/images/contactBook/notification.svg";
import ann from "../../../../res/images/contactBook/ann.svg";
import search from "../../../../res/images/contactBook/search.svg";
import "./AllContacts.css";
import TableContacts from './TableContacts';

const AllContacts: FC = () => {
    return (
        <section className="contact-book__main-content">
            <section className="contact-book__header-contacts">
                <div className="contact-book__title-inner">
                    <h2 className="contact-book__title-all-contacts">All contacts</h2>
                    <span className="contact-book__number-of-contacts">10</span>
                </div>
                <div className="contact-book__inner-person">
                    <img src={notification} alt="" className="contact-book__notification-img" />
                    <img src={ann} alt="" className="contact-book__img-person" />
                    <p className="contact-book__name-person">Harriet Andersson</p>
                </div>
            </section>
            <section className="contact-book__form-inner">
                <div className="contact-book__input-inner">
                    <div className="contact-book__for-select">
                        <select
                            className="contact-book__sort-alphabet"

                        >
                            <option
                                value="A-Z"
                            >
                Sort by: A-Z
                            </option>
                            <option
                                value="Z-A"
                            >
                Sort by: Z-A
                            </option>
                        </select>
                        <select className="contact-book__groups">
                            <option value="all">Groups: All</option>
                        </select>
                    </div>
                    <div className="contact-book__find-blok">
                        <input
                            className="contact-book__find-cash"
                            placeholder="Search"
                            type="text"

                        />
                        <img
                            className="contact-book__img-search"
                            src={search}
                            alt="search img"
                        />
                    </div>
                </div>
                <div className="contact-book__btn-inner">
                    <a href="/contactBook/contact_cash" className="contact-book__btn">
                        <span>ContactBook cash</span>
                        <i className="icon-money" />
                    </a>
                    <a href="#">
                        <button className="contact-book__btn">
                            <span>Send referrals</span>
                            <i className="icon-User" />
                        </button>
                    </a>
                </div>
            </section>
            <TableContacts />
        </section>
    );
};
export default AllContacts;
