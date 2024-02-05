import React from 'react';
import {
  TextField,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';

const defaultTheme = createTheme();

export function Filter() {
  const dispatch = useDispatch();
  const onFilter = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box mx="auto" maxWidth="600px">
        <Typography variant="h5" gutterBottom>
          Filter Contacts
        </Typography>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          type="text"
          onChange={onFilter}
          label="Find contacts by name"
        />
      </Box>
    </ThemeProvider>
  );
}
