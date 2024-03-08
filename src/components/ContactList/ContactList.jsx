import React from 'react';
import { List, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button type="button" onClick={() => onRemoveContact(contact.id)}>
              Delete
            </Button>
          }
        </li>
      ))}
    </List>
  );
};
