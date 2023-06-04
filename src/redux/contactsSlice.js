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

  extraReducers: bilder =>
    bilder
      .addCase(fetchContacts.pending, state => {
        state.isLoadign = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoadign = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoadign = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoadign = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoadign = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoadign = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoadign = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoadign = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoadign = false;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
