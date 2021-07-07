import {
    USERS_TYPE,
    SEARCH_PEOPLE,
    SEARCH_TEXT,
    REVERSE_TYPE,
    SEND_LETTER,
    DOWNLOAD_SMS,
} from './actionTypes';

export const actions = {
  getAllUsers: (users: any) => ({
    type: USERS_TYPE,
    users,
  }),
  getSearchPeople: (searchPeople: any) => ({
    type: SEARCH_PEOPLE,
    searchPeople,
  }),
  getSearchText: (searchText: any) => ({
    type: SEARCH_TEXT,
    searchText,
  }),
  performUnfolding: (reverse: any) => ({
    type: REVERSE_TYPE,
    reverse,
  }),
  getLetter: (sendLetter: any) => ({
    type: SEND_LETTER,
    sendLetter,
  }),
  dovnloadSend: (download: any) => ({
    type: DOWNLOAD_SMS,
    download,
  }),
};
