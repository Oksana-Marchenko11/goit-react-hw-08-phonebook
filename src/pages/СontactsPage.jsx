import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
