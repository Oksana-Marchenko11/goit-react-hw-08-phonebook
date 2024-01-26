import React from 'react';
import { Layout } from './Layout/Layout';
import { Contacts } from 'pages/contacts';
import { Register } from 'pages/register';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/login';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
