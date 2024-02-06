import React, { useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const nameInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }
    const numberInContacts = contacts.some(
      ({ number }) =>
        number.toLowerCase() === form.elements.number.value.toLowerCase()
    );
    if (numberInContacts) {
      alert(`${form.elements.number.value} is already in contacts`);
      return;
    }
    dispatch(
      addContacts({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <Box mx="auto" maxWidth="600px">
      <Typography variant="h5" gutterBottom>
        Add Contact
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          margin="normal"
          required
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          fullWidth
          margin="normal"
          required
          id="number"
          label="Number"
          name="number"
          autoComplete="number"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ display: 'block', margin: '12px auto' }}
        >
          Add Contact
        </Button>
      </form>
    </Box>
  );
};
