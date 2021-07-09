import React, { FC, useState, useContext, useEffect } from 'react';
import { Table } from 'reactstrap';
import './TableContacts.css';
import { people } from '../../../../res/helpers/people';
import arrowDown from '../../../../res/images/contactBook/arrowDown.svg';
import { ContactBookContext } from "../../../context/ContactBook/contextContactBook";

const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//@ts-ignore
const TableContacts: FC = () => {
    const { state, actions }= useContext(ContactBookContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [showUsers, setShowUsers] = useState(10);
    const [sortUsers, setSortUsers] = useState(people
        .sort((a, b) => a.name > b.name ? 1 : -1));
    const [face, setFace] = useState(false);
    const friends = state.searchPeople;
    const text = state.searchText;
    const reverse = state.reverse;

    useEffect(() => {
        actions.getAllUsers(people);
    }, []);

    useEffect(() => {
        actions.getAllUsers(people);
        const letter = [];
        const result = [];
        for (let i = 0; friends.length > i; i++) {
            if (!letter.includes(friends[i].name[0])) {
                letter.push(friends[i].name[0].toUpperCase());
                result.push({ 'letter': friends[i].name[0].toUpperCase() });
            }
            result.push(friends[i]);
        }
        setSortUsers(result);
    }, [text, reverse]);

    useEffect(() => {
        if (friends.length > 0) {
            const letter = [];
            const result = [];
            for (let i = 0; friends.length > i; i++) {
                console.log(friends[i].name);
                if (!letter.includes(friends[i].name[0])) {
                    letter.push(friends[i].name[0].toUpperCase());
                    result.push({ 'letter': friends[i].name[0].toUpperCase() });
                }
                result.push(friends[i]);
            }
            setSortUsers(result);
        } else {
            actions.getAllUsers(people);
            const letter = [];
            const result = [];
            for (let i = 0; sortUsers.length > i; i++) {
                if (!letter.includes(sortUsers[i].name[0])) {
                    letter.push(sortUsers[i].name[0].toUpperCase());
                    result.push({ 'letter': sortUsers[i].name[0].toUpperCase() });
                }
                result.push(sortUsers[i]);
            }
            setSortUsers(result);
            actions.getSearchPeople(result);
        }
    }, []);

    const indexOfLastUsers = currentPage * showUsers;
    const indexOfFirstUsers = indexOfLastUsers - showUsers;
    const currentUsers = sortUsers.slice(indexOfFirstUsers, indexOfLastUsers);
    const numberUser = currentUsers.filter(user => Object.keys(user).length > 1);
    const addPeople = () => {
        if (showUsers !== sortUsers.length && sortUsers.length - showUsers >= 5) {
            setShowUsers(showUsers + 6);
        } else {
            setShowUsers(sortUsers.length - showUsers + showUsers);
        }
    };

    const selectAllFriends = ({ target }) => {
        console.log(target);
        currentUsers.forEach(people => {
            setFace(!face);

            if (Object.keys(people).length !== 1) {
                if (target.checked) {
                    if (people.name[0] === target.id) {
                        return people.completed = true;
                    }
                    return people;
                }
                if (people.name[0] === target.id) {
                    return people.completed = false;
                }

                return people;
            }
            return people;
        });
    };

    const checkboxHandler = ({ target: { id } }) => {
        currentUsers.forEach(person => {
            if (person.id === id) {
                return person.completed = person.completed ? false : true;
            }
            return person;
        });
        setFace(!face);
    };
    //@ts-ignore
    const openTheWholeList = (letter) => {
        if (sortUsers.some(man => man.letter === letter)) {
            setShowUsers(sortUsers.length);
        }
    };

    const social = [
    'https://www.facebook.com',
    'https://www.linkedin.com',
    'https://www.instagram.com',
    'https://twitter.com',
    ];

    return (
        <>
            <section className="contact-book__table-block">
                <div className="contact-book__scroll">

                    <Table className="contact-book__table-wrapper">
                        <thead>
                            <tr className="contact-book__head-table">
                                <th
                                    className="contact-book__th"
                                >
                  Full name
                                </th>
                                <th className="contact-book__th contact-book__th-email">Email</th>
                                <th className="contact-book__th contact-book__th-phone">Phone number</th>
                                <th className="contact-book__th contact-book__th-social">Social media profile</th>
                                <th className="contact-book__th contact-book__th-groups">Groups</th>
                            </tr>
                        </thead>
                        <tbody style={{
                background: "#FFFFFF",
                        }}
                        >
                            <tr className="contact-book__list-alph">
                                {alph.map((letter) => (
                                    <td
                                       
                                        /*                                         className={friends.some(man => man.name[0] === letter) ? "contact-book__item-alph-true" : "contact-book__item-alph"}
 */ key={letter}
                                        onClick={()=>{
                                            //@ts-ignore
                                            openTheWholeList(letter);
                                        }}
                                    >
                                        {letter}
                                    </td>
                                ))}
                            </tr>
                            {currentUsers.map(person => (
                                //@ts-ignore
                                (Object.keys(person).length === 1) ? (
                                    <tr key={person.letter} className="contact-book__tr-alphabet">
                                        <td>
                                            <input
                                                className="contact-book__input-checkbox"
                                                id={person.letter}
                                                type="checkbox"
                                                onChange={selectAllFriends}
                                            />
                                            <label className="contact-book__td-checkbox" htmlFor={person.letter}></label>
                                            <span className="contact-book__td-text">{person.letter}</span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                ) : (
                                    <tr key={person.name} className="contact-book__tr-content">
                                        <td className="contact-book__th">
                                            <input
                                                className="contact-book__input-checkbox"
                                                type="checkbox"
                                                id={person.id}
                                                checked={person.completed}
                                                onChange={checkboxHandler}
                                            />
                                            <label className="contact-book__td-checkbox" htmlFor={person.id}></label>
                                            <img src={person.img} alt="Photo person" />
                                            <span className="contact-book__td-text contact-book__full-name">{person.name}</span>
                                        </td>
                                        <td className="contact-book__th contact-book__email">{person.email}</td>
                                        <td className="contact-book__th contact-book__phon-number">
                                            <img
                                                className="contact-book__img-flag"
                                                src={person.flag}
                                                alt="flag country"
                                            />
                                            {person.phonNumber}
                                        </td>
                                        <td className="contact-book__th">{person.social.map(s => (
                                            <a
                                                key={s}
                                                //@ts-ignore
                                                href={social.filter(el => {
                                                    const arr = s.split('/').join('.').split('.');
                                                    const result = arr[arr.length - 2];
                                                    return el.includes(result.toLowerCase());
                                                })}
                                            >
                                                <img
                                                    className="contact-book__social-img"
                                                    src={s}
                                                    alt="social"
                                                />
                                            </a>
                                        ))}</td>
                                        <td className="contact-book__th"><span className="contact-book__group">{person.group}</span></td>
                                    </tr>
                                )))}
                        </tbody>
                    </Table>
                </div>

            </section>

            <div className="contact-book__block-pagination">
                <div
                    className="contact-book__inner-add-people"
                    onClick={addPeople}
                >
                    <img
                        className="contact-book__img-arrow"
                        src={arrowDown}
                        alt="Arrow Down"
                    />
                    <span>Load more</span>
                </div>
                <p className="contact-book__show-contacts">
                    {`Showing ${1} to ${numberUser.length} of ${people.length} contacts`}
                </p>
            </div>
        </>
    );
};
export default TableContacts;
