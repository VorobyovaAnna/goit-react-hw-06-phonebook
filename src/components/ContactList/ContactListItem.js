import React from 'react';
import PropTypes from 'prop-types';
import { ContactData, ContactsItem } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactsItem>
      <ContactData>
        {name}: {number}
      </ContactData>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </ContactsItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),

  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
