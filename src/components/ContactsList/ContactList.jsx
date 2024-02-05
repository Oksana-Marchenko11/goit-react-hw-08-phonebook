import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const filteredContact = useSelector(selectVisibleContacts);
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
            ? filteredContact.map(({ id, name, phone }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      className={css.delete_btn}
                      value={id}
                      onClick={() => dispatch(deleteContacts(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : contacts.map(({ id, name, phone }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      className={css.delete_btn}
                      value={id}
                      onClick={() => dispatch(deleteContacts(id))}
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
