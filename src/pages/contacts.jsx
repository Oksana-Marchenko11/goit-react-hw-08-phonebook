import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  return (
    <div>
      <p>This is your personal phone book</p>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
