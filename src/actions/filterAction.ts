import { FilterAction, FILTER_TEXT } from "../types/filterTypes";

export const filterText = (text: string): FilterAction => {
    return {
        type: FILTER_TEXT,
        text,
    };
};

