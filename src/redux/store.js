import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from "./filter/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'contacts2',
    storage,
    whitelist: ['contacts'],
}

export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store);