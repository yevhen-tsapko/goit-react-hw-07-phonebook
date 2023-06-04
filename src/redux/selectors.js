export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;
export const selectContactsList = state => {
  const filterContacts = (contacts, filterValue) =>
    contacts.filter(el => el.name.toLowerCase().includes(filterValue));
  const { items } = state.contacts;
  const filterValue = state.filter;
  return filterValue ? filterContacts(items, filterValue) : items;
};
