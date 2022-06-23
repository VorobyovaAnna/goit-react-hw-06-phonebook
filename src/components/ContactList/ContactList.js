import React from 'react';
import ContactItem from '../ContactItem';
import { Contacts } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Contacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id} onDeleteContact={onDeleteContact} contacts={contact} />
      ))}
    </Contacts>
  );
};

export default ContactList;
