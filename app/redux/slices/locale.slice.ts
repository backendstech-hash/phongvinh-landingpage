import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface ILocaleState {
    locale: 'vi' | 'en';
}

export const initialState: ILocaleState = {
    locale: 'en'
};

const localeSlice = createSlice({
    name: "locale",
    initialState,
    reducers: {
        resetStateLocale: () => {
            return initialState;
        },
        setLocale: (state, _action: PayloadAction<'vi' | 'en'>) => {
            state.locale = _action.payload;
            return state;
        }
    }
});

export const {
    setLocale,
    resetStateLocale
} = localeSlice.actions;
export default localeSlice.reducer;

