import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { contactsReducer } from './contactsSlice';
// import { persistedContactsReducer } from './contactsSlice';

// const rootReducer = combineReducers({ contacts: persistedContactsReducer });


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);