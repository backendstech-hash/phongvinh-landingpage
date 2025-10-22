import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface IAlertState {
    content?: ReactNode,
    timeAutoHide?: number
}

export const initialState: IAlertState = {
    content: undefined,
    timeAutoHide: 3000
};
const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        resetStateAlert: () => {
            return initialState;
        },
        setAlert: (state, _action: PayloadAction<{
            content?: ReactNode,
            timeAutoHide?: number
        }>) => {
            state.content = _action.payload.content;
            state.timeAutoHide = _action.payload.timeAutoHide ?? 3000;
            return state;
        }
    }
});

export const { 
    setAlert,
    resetStateAlert
} = alertSlice.actions;
export default alertSlice.reducer;

