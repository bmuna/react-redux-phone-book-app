import { FilterState } from "../types/filterTypes";
import { IPhoneBook } from "../types/phoneBookTypes";


 export const getFilteredPhoneBook = (phoneBooks: IPhoneBook[], filters: FilterState) => {
    const { text } = filters;
    return phoneBooks.filter((phoneBook) => {
        const textPhoneBooksMatch=  
        phoneBook.firstName.toLowerCase().includes(text.toLowerCase()) ||
        phoneBook.lastName.toLowerCase().includes(text.toLowerCase()) ||
        phoneBook.phoneNumber.toLowerCase().includes(text.toLowerCase()) 
        return textPhoneBooksMatch;
    });
};