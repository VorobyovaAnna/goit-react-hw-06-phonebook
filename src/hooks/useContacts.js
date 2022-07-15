import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addItem, deleteItem, setFilter } from 'redux/contactsSlice';
import { getContacts } from 'redux/contactsSelectors'

export const useContacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    // const filter = useSelector(getFilter);

    const setContact = contact => dispatch(addItem(contact));
    const deleteContact = contactId => dispatch(deleteItem(contactId));
    const changeFilter = value => dispatch(setFilter(value));

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName
    );

    matchName ? alert(`${name} is already in contacts`) : setContact(contact);
  };

    
  return {
    // filter,
    addContact,
    deleteContact,
    changeFilter,
  };
};