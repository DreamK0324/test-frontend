import React, { useState } from "react";
import { connect } from "react-redux";
import { addUserThunk } from "../../store/thunks";
import { NewUserView } from "../views";

const NewUserContainer = ({ addUser }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        if (name === 'firstname') {
          setFirstname(value);
        } else if (name === 'lastname') {
          setLastname(value);
        } else if (name === 'email') {
          setEmail(value);
        }
    };
    
    const handleSubmit = async event => {
        event.preventDefault();
        if(firstname === '' || lastname === '') {
          setError('First and Last name field are required');
          return;
        }
        
        if(email === '') {
          setError('Email field are required');
          return;
        }
      
    
        const user = {
          firstname,
          lastname,
          email,
        };
    
        const newUser = await addUser(user);
    
        setError('');
        window.location.href = `/user/${newUser.id}`;
    };


    return (
        <NewUserView
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
    );

};

const mapDispatch = dispatch => {
    return {
      addUser: user => dispatch(addUserThunk(user)),
    };
};
  
export default connect(null, mapDispatch)(NewUserContainer);