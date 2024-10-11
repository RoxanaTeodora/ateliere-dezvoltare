import React, { useState } from 'react';
import { auth } from '../components/Auth/Auth';
import { signOut } from 'firebase/auth';

const SignOut = () => {
    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log('User signed out');
            // Optionally, redirect to a login page or show a success message
          })
          .catch((error) => {
            console.error('Error signing out:', error);
          });
      };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;