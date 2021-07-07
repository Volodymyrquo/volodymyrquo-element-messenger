export interface ContactBookState {
  users: any[];
  searchPeople: any[];
  searchText: string;
  sendLetter: string;
  reverse: boolean;
  download: number;
}

export interface ContactBookAction {
  users: any[];
  searchPeople: any[];
  searchText: string;
  reverse: boolean;
  sendLetter: string;
  download: number;
  type: string;
}
