import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface IMessageChatState {
    messages: { fromMe: boolean, message: string }[],
    countMember: number,
    memberId: string[],
    adminIsOnline: boolean
}

export const initialState: IMessageChatState = {
    messages: [],
    countMember: 0,
    memberId: [],
    adminIsOnline: false
};

const messageChatSlice = createSlice({
    name: "messageChat",
    initialState,
    reducers: {
        resetStateMessageChat: () => {
            return initialState;
        },
        pushNewMessage: (state, _action: PayloadAction<{ fromMe: boolean, message: string }>) => {
            state.messages = [ ...state.messages, _action.payload ];
            return state;
        },
        pushNewMessages: (state, _action: PayloadAction<{ fromMe: boolean, message: string }[]>) => {
            state.messages = [ ...state.messages, ..._action.payload ];
            return state;
        },
        countMember: (state, _action: PayloadAction<number>) => {
            state.countMember = _action.payload;
            return state;
        },
        setMemberId: (state, _action: PayloadAction<string[]>) => {
            state.memberId = _action.payload;
            return state;
        },
        setAdminOnline: (state, _action: PayloadAction<boolean>) => {
            state.adminIsOnline = _action.payload;
            return state;
        },
    }
});

export const {
    resetStateMessageChat,
    pushNewMessage,
    pushNewMessages,
    countMember,
    setMemberId,
    setAdminOnline
} = messageChatSlice.actions;
export default messageChatSlice.reducer;

