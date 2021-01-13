/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT, 
  DELETE_CONTACT, 
  SET_CURRENT, 
  CLEAR_CURRENT, 
  UPDATE_CONTACT, 
  FILTER_CONTACTS, 
  CLEAR_FILTER
} from '../types';
const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Demis Spencer',
        email: 'spenser@gmail.com',
        phone: '333-333-3333',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Romane Corvo',
        email: 'corvo@gmail.com',
        phone: '313-313-3133',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Deman Ster',
        email: 'ster@gmail.com',
        phone: '334-334-3333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // SetCurrent Contact

  // Clear Current Contact

  // Update  Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider 
    value={{
      contacts: state.contacts,
      addContact,
      deleteContact
    }}
  > 
    {props.children}
  </ContactContext.Provider>
  );
};


export default ContactState;