import React, { FC, useState, useContext } from 'react';
import classNames from 'classnames';
import { Context } from "../../../context/context";
import {groupsItems} from "../../../../res/helpers/groups"
import {v4 as uuidv4} from 'uuid'
import { ContactBookContext } from "../../../context/ContactBook/contextContactBook";




const NavigationGroups: FC = () => {
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);
    const { setPage, setParams, setTable } = useContext(Context);
    const {actions} = useContext(ContactBookContext)
     const {getGroup} =  actions

    return (

        <ul className="metismenu list-unstyled" id="side-menu" >
            {groupsItems.map(item => {
                const params = {
                name: item.name,
            
                };
                return <li key={uuidv4()}

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
                            getGroup(item.name);
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
