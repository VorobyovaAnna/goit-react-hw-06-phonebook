import React from 'react';
import { useContacts } from 'hooks/useContacts';

const Filter = () => {
  const { changeFilter, filter } = useContacts();
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={e => changeFilter(e.currentTarget.value)} />
    </label>
  );
};

export default Filter;
