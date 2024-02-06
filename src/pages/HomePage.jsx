import React from 'react';
import myImage from '../pbx-phone-system.jpeg';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <p style={{ fontSize: '28px', color: 'dark blue', fontWeight: '700' }}>
        Welcome to your personal Phonebook
      </p>
      <img src={myImage} alt="Phone System" style={{ width: '100%' }} />
    </div>
  );
};

export default HomePage;
