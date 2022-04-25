export const FILTER_TEXT = "FILTER_TEXT";

export interface FilterState {
    text: string;
}
interface FilterTextAction {
    type: typeof FILTER_TEXT;
    text: string;
}

export type FilterAction = FilterTextAction;
