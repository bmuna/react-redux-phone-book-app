import { ADD_PHONEBOOK, IPhoneBook, PhoneBookAction, PhoneBookState } from "../types/phoneBookTypes";



const initialState:PhoneBookState  = {
  phoneBooks: []
}
  
  export const phoneBookReducer = (state: PhoneBookState = initialState, action: PhoneBookAction): PhoneBookState => {
    switch (action.type) {
    case ADD_PHONEBOOK:
      const newPhoneBook: IPhoneBook = {
          id: Date.now(),
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          phoneNumber: action.payload.phoneNumber,
      };
      return {
        ...state,
        phoneBooks: state.phoneBooks.concat(newPhoneBook)
      };
   
      default:
        return state
    }
};



