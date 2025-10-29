import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface IChatState {
    username?: string
    sessionId?: string;
}

export const initialState: IChatState = {
    username: undefined,
    sessionId: undefined
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        resetStateChat: () => {
            return initialState;
        },
        setUsername: (state, _action: PayloadAction<string | undefined>) => {
            state.username = _action.payload;
            return state;
        },
        setSessionId: (state, _action: PayloadAction<string | undefined>) => {
            state.sessionId = _action.payload;
            return state;
        }
    }
});

export const {
    setUsername,
    setSessionId,
    resetStateChat
} = chatSlice.actions;
export default chatSlice.reducer;

