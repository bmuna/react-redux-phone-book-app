import { FilterAction, FilterState, FILTER_TEXT } from "../types/filterTypes";

const initialFilterState = {
  text: "",
};

export const filtersReducer = (state = initialFilterState, action: FilterAction): FilterState => {
  switch (action.type) {
      case FILTER_TEXT:
          return {
              ...state,
              text: action.text,
          };
  
      default:
          return state;
  }
};

