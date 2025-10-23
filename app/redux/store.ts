/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
// import alertReducers, { IAlertState } from './slices/alert.slice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import localeReducers, { ILocaleState } from "./slices/locale.slice";
import chatReducers, { IChatState } from "./slices/chat.slice";

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    stateReconciler: autoMergeLevel2,
    blacklist: []
};

const persistedReducer = persistCombineReducers<{
    // alert: IAlertState,
    locale: ILocaleState,
    chat: IChatState
}>(persistConfig, {
    // alert: alertReducers,
    locale: localeReducers,
    chat: chatReducers
});

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                // ignoredActions: ['socket/setSocket', 'socket/setSocketAI', 'socket/setSocketAudioAI', 'alert/setAlert', FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                // Ignore these field paths in all actions
                // ignoredActionPaths: ['socket.socket', 'socket.socketAI', 'socket.socketAudioAI', 'alert.content.$$typeof'],
                ignoredActionPaths: [],
                // Ignore these paths in the state
                // ignoredPaths: ['socket.socket', 'socket.socketAI', 'socket.socketAudioAI', 'alert.content.$$typeof'],
                ignoredPaths: []
            },
        })
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
