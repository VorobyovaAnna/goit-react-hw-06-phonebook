import React from 'react';
import ContactItem from '../ContactItem';
import { Contacts } from './ContactList.styled';
import { useContacts } from 'hooks/useContacts';

const ContactList = () => {
  const { deleteContact, getVisibleContacts } = useContacts();
  const contacts = getVisibleContacts();
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} onDeleteContact={() => deleteContact(id)} />
      ))}
    </Contacts>
  );
};

export default ContactList;
