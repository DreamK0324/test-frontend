import React from 'react';
import { Link } from 'react-router-dom';

const UserView = ({ user }) => {
  console.log('User:', user);

  if (!user) {
    console.log('User is null or undefined');
    return <div>Loading...</div>;
  }

  const { id, firstname, lastname, email } = user;

  console.log('User ID:', id);
  console.log('First Name:', firstname);
  console.log('Last Name:', lastname);
  console.log('Email:', email);

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {id}</p>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Email: {email}</p>
      <Link to="/users">Back to All Users</Link>
    </div>
  );
};


export default UserView;
