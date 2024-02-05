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

// const contactsConfig = {
//     key: 'contacts2',
//     storage,
//     whitelist: ['contacts'],
// }

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

// export const persistedContactsReducer = persistReducer(contactsConfig, contactsReducer);
export const persistedAuthReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store);