import { ADD_PHONEBOOK, IPhoneBook, PhoneBookAction } from "../types/phoneBookTypes";


export const addPhoneBook = (phoneBook: IPhoneBook): PhoneBookAction => {
    return {
        type: ADD_PHONEBOOK,
        payload: phoneBook,
    };
};

