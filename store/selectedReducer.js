import { ADD_COURSE, REMOVE_COURSE } from "./selectedActions";

const initialState = [''];

export const selectedReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === ADD_COURSE) {
        return [...state, payload];
    }

    if (type === REMOVE_COURSE) {
        return state.filter(course => course !== payload);
    }

    return state;
};
