import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';
const initialContacts = {
  items: [],
  isLoadign: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoadign = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoadign = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoadign = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoadign = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoadign = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      state.error = null;
    },
    [deleteContact.rejected](state, action) {
      state.isLoadign = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoadign = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoadign = false;
      state.items = action.payload;
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.isLoadign = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
