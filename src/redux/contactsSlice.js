import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
        deleteItem(state, action) {
            state.items = state.items.filter(({ id }) => id !== action.payload);
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addItem, deleteItem, setFilter } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;