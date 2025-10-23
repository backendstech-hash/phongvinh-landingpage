import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface IChatState {
    username?: string
    sessionId?: string;
    messages: { fromMe: boolean, message: string }[]
}

export const initialState: IChatState = {
    username: undefined,
    sessionId: undefined,
    messages: []
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        resetStateChat: () => {
            return initialState;
        },
        setUsername: (state, _action: PayloadAction<string>) => {
            state.username = _action.payload;
            return state;
        },
        setSessionId: (state, _action: PayloadAction<string>) => {
            state.sessionId = _action.payload;
            return state;
        },
        pushNewMessage: (state, _action: PayloadAction<{ fromMe: boolean, message: string }>) => {
            state.messages = [ ...state.messages, _action.payload ];
            return state;
        }
    }
});

export const {
    setUsername,
    setSessionId,
    resetStateChat,
    pushNewMessage
} = chatSlice.actions;
export default chatSlice.reducer;

