export const ADD_PHONEBOOK = "ADD_PHONEBOOK";


export interface IPhoneBook{
    id: number;
    firstName: String;
    lastName: String;
    phoneNumber: String;
}

export interface PhoneBookState {
    phoneBooks: IPhoneBook[];
}

interface AddPhoneBook {
    type: typeof ADD_PHONEBOOK;
    payload: IPhoneBook;
}


export type PhoneBookAction = AddPhoneBook;
