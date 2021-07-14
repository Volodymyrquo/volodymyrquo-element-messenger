import React, { FC, useState, useContext } from 'react';
import classNames from 'classnames';
import { Context } from "../../../context/context";
import { mapDiff } from '../../../../../../matrix-react-sdk/src/utils/maps';
import { inviteMultipleToRoom } from '../../../../../../matrix-react-sdk/src/RoomInvite';

type PropsType = {
    isOpen: boolean;
};

const groupsItems = [
    {
        name: "My family",
        page: "groupsItem",
        activeClass: "allContactsBtn",
    },
    {
        name: "My friends",
        page: "groupsItem",
        activeClass: "myFavouritesBtn",
    },
    {
        name: "My trust circle",
        page: "groupsItem",
        activeClass: "recentlyAddedBtn",
    },
    {
        name: "My colleagues",
        page: "groupsItem",
        activeClass: "referredContactBook",
    },
];

const NavigationGroups: FC<PropsType> = ({ isOpen }) => {
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);
    const { setPage, setParams } = useContext(Context);

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
 */ setPage(item.page);
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
