import { ContactBookState, ContactBookAction } from './typeScript';
import {
    USERS_TYPE,
    SEARCH_PEOPLE,
    SEARCH_TEXT,
    REVERSE_TYPE,
    SEND_LETTER,
    DOWNLOAD_SMS,
} from './actionTypes';

const initialState: ContactBookState = {
  users: [],
  searchPeople: [],
  searchText: '',
  reverse: false,
  sendLetter: '',
  download: 0,
};

const reducerContactBook = (state = initialState, action: ContactBookAction): ContactBookState => {
    switch (action.type) {
        case USERS_TYPE:
            return {
        ...state,
        users: action.users.sort((a, b) => !state.reverse ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)),
        searchPeople: action.users.sort((a, b) => !state.reverse ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)),
            };

        case SEARCH_PEOPLE:
            return {
        ...state,
        searchPeople: state.users
            .filter(user => {
                const removeSpace = user.phonNumber.replace(/\s/g, '');
                if (user.name.toLowerCase().includes(state.searchText.trim().toLowerCase())) {
                    return user.name.toLowerCase().includes(state.searchText.trim().toLowerCase());
                }
                if (user.email.toLowerCase().includes(state.searchText.trim().toLowerCase())) {
                    return user.email.toLowerCase().includes(state.searchText.trim().toLowerCase());
                }
                if (removeSpace.includes(state.searchText.trim())) {
                    return removeSpace.includes(state.searchText.trim());
                }
            }),
            };

        case SEARCH_TEXT:
            return {
        ...state,
        searchText: action.searchText,
            };

        case REVERSE_TYPE:
            return {
        ...state,
        reverse: action.reverse,
            };

        case SEND_LETTER:
            return {
        ...state,
        sendLetter: action.sendLetter,
            };

        case DOWNLOAD_SMS:
            return {
          ...state,
          download: action.download,
            };
        default:
            return state;
    }
};

export default reducerContactBook;
