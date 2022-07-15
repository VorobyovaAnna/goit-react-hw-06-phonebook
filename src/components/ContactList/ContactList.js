import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { Contacts } from './ContactList.styled';
import { useContacts } from 'hooks/useContacts';
import { getVisibleContacts } from 'redux/contactsSelectors'

const ContactList = () => {
  const { deleteContact } = useContacts();
  const contacts = useSelector(getVisibleContacts);
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} onDeleteContact={() => deleteContact(id)} />
      ))}
    </Contacts>
  );
};

export default ContactList;
