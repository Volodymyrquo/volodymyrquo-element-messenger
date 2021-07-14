import React, { FC, useState, useContext } from 'react';
import notification from '../../../../../res/images/contactBook/notification.svg';
import ann from '../../../../../res/images/contactBook/ann.svg';
import search from '../../../../../res/images/contactBook/search.svg';
import TableReferred from './TableReferred';
import { people } from '../../../../../res/helpers/people';
import { ContactBookContext } from "../../../../context/ContactBook/contextContactBook";

const ReferredContactBook: FC = () => {
    const { actions } = useContext(ContactBookContext);
    const [textValue, setTextValue] = useState('');
    const [defaultSelect, setDefaultSelect] = useState("A-Z");
    const { getSearchText, getSearchPeople, performUnfolding, getAllUsers } = actions;

    const findUser = ({ target: { value } }) => {
        setTextValue(value);
        getSearchText(value);
        getSearchPeople(value);
    };

    const handleInputChange = ({ target: { value } }) => {
        setDefaultSelect(value);
        if ("A-Z" === value) {
            performUnfolding(false);
            getAllUsers(people);
        }

        if ("Z-A" === value) {
            performUnfolding(true);
            getAllUsers(people);
        }
    };
    return (
        <section className="contact-book__main-content">
            <section className="contact-book__header-contacts">
                <div className="contact-book__title-inner">
                    <h2 className="contact-book__title-all-contacts">Referred</h2>
                    <span className="contact-book__number-of-contacts">{people.length}</span>
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
                            value={defaultSelect}
                            onChange={handleInputChange}
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
                            value={textValue}
                            onChange={findUser}
                        />
                        <img
                            className="contact-book__img-search"
                            src={search}
                            alt="search img"
                        />
                    </div>
                </div>
                <div className="contact-book__btn-inner">
                    <button className="contact-book__btn">
                        <span>ContactBook cash</span>
                        <i className="icon-money" />

                    </button>
                    <button disabled={true} className="contact-book__btn">
                        <span>Send referrals</span>
                        <i className="icon-User" />
                    </button>
                </div>
            </section>
            <TableReferred />
        </section>
    );
};
export default ReferredContactBook;
function performUnfolding(arg0: boolean) {
    throw new Error('Function not implemented.');
}

