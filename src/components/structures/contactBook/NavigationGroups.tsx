import React, { FC, useState, useContext } from 'react';
import classNames from 'classnames';
import { Context } from "../../../context/context";



const groupsItems = [
    {
        name: "My family",
        table: "groupsItem",
        activeClass: "allContactsBtn",
    },
    {
        name: "My friends",
        table: "groupsItem",
        activeClass: "myFavouritesBtn",
    },
    {
        name: "My trust circle",
        table: "groupsItem",
        activeClass: "recentlyAddedBtn",
    },
    {
        name: "My colleagues",
        table: "groupsItem",
        activeClass: "referredContactBook",
    },
];

const NavigationGroups: FC = () => {
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);
    const { setPage, setParams, setTable } = useContext(Context);

    return (

        <ul className="metismenu list-unstyled" id="side-menu" >
            {groupsItems.map((item, idx) => {
                const params = {
                name: item.name,
                };
                return <li key={idx}

                ><a href="/#/contact_book"
                        className={classNames("contact-book__item", /* {
    "contact-book__item-active": item.activeClass,
                    } */)}
                        onClick={() => {
                        /*                         setAllContactsBtn(true);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
 */ setPage("contactBook");
                            setTable(item.table);
                            setParams(params);
                        }}
                    >
                        <i className="icon-User" />
                        <span>{item.name}</span>
                    </a>

                </li>;
            })}
        </ul>

    );
};
export default NavigationGroups;
