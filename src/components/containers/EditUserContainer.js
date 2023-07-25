import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { editUserThunk, fetchUserThunk, fetchAllMoviesThunk } from '../../store/thunks';

const EditUserContainer = ({ user, fetchUser, editUser, fetchMovies }) => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        error: ""
    });

    useEffect(() => {
        fetchUser(id);
        fetchMovies();
    }, [fetchUser, fetchMovies, id]);

    useEffect(() => {
        setFormData({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
        });
    }, [user]);

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        // Form validation
        if (formData.firstname === "" || formData.lastname === "") {
            setFormData({ ...formData, error: "Error: First and Last name cannot be empty" });
            return;
        }

        if (formData.email === "") {
            setFormData({ ...formData, error: "Error: Email cannot be empty" });
            return;
        }

        // Get new info for user from form input
        let updatedUser = {
            id: user.id,
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
        };

        editUser(updatedUser);

        // Navigate to the user details page
        window.location.href = `/user/${user.id}`;
    }

    return (
        <div>
            <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                <br />
                <label style={{ color: '#11153e', fontWeight: 'bold' }}>Firstname: </label>
                <input type="text" name="firstname" value={formData.firstname} placeholder={user.firstname} onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <label style={{ color: '#11153e', fontWeight: 'bold' }}>Lastname: </label>
                <input type="text" name="lastname" value={formData.lastname} placeholder={user.lastname} onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
                <input type="text" name="email" value={formData.email} placeholder={user.email} onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <button type="submit">
                    Submit
                </button>

            </form>

            <br />
            <br />
            <Link to="/users">All Users Page</Link>

            <br />
            <br />
            <Link to={`/user/${user.id}`}>Previous Page</Link>

            <br />
            <br />
            <Link to="/">Home Page</Link>

        </div>
    );
}

// map state to props
const mapState = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatch = (dispatch) => {
    return {
        editUser: (user) => dispatch(editUserThunk(user)),
        fetchUser: (id) => dispatch(fetchUserThunk(id)),
        fetchMovies: () => dispatch(fetchAllMoviesThunk()),
    };
};

export default connect(mapState, mapDispatch)(EditUserContainer);
