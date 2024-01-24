import React from 'react';
import css from './ContactsList.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const isFilterUsed = filter.trim() !== '';

  return (
    <div>
      <h3 className={css.contacts_text}>Contacts</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {isFilterUsed
            ? filteredContacts.map(({ id, name, number }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{number}</td>
                  <td>
                    <button
                      className={css.delete_btn}
                      value={id}
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : contacts.map(({ id, name, number }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{number}</td>
                  <td>
                    <button
                      className={css.delete_btn}
                      value={id}
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
