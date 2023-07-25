import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { editMovieThunk, fetchMovieThunk, fetchAllUsersThunk } from '../../store/thunks';

const EditMovieContainer = ({ movie, fetchMovie, editMovie, fetchUsers }) => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title: "",
        releaseDate: "",
        rate: "",
        error: ""
    });

    useEffect(() => {
        fetchMovie(id);
        fetchUsers();
    }, [fetchMovie, fetchUsers, id]);

    useEffect(() => {
        setFormData({
            title: movie.title,
            releaseDate: movie.releaseDate,
            rate: movie.rate,
        });
    }, [movie]);

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        // Form validation
        if (formData.title === "") {
            setFormData({ ...formData, error: "Error: Title cannot be empty" });
            return;
        }

        if (formData.releaseDate === "") {
            setFormData({ ...formData, error: "Error: Release date cannot be empty" });
            return;
        }

        if (formData.rate === "") {
            setFormData({ ...formData, error: "Error: Rate cannot be empty" });
            return;
        }

        // Get new info for movie from form input
        let updatedMovie = {
            id: movie.id,
            title: formData.title,
            releaseDate: formData.releaseDate,
            rate: formData.rate,
        };

        editMovie(updatedMovie);

        // Navigate to the user details page
        window.location.href = `/movie/${movie.id}`;
    }

    return (
        <div>
            <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                <br />
                <label style={{ color: '#11153e', fontWeight: 'bold' }}>Title: </label>
                <input type="text" name="title" value={formData.title} placeholder={movie.title} onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <label style={{ color: '#11153e', fontWeight: 'bold' }}>Release Date: </label>
                <input type="date" name="releaseDate" value={formData.releaseDate} placeholder={movie.releaseDate} onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <label style={{ color: '#11153e', fontWeight: 'bold' }}>Rate: </label>
                <input type="number" name="rate" value={formData.rate} placeholder={movie.rate} onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <button type="submit">
                    Submit
                </button>

            </form>

            <br />
            <br />
            <Link to="/movies">All Movies Page</Link>

            <br />
            <br />
            <Link to={`/movie/${movie.id}`}>Previous Page</Link>

            <br />
            <br />
            <Link to="/">Home Page</Link>

        </div>
    );
}

// map state to props
const mapState = (state) => {
    return {
        movie: state.movie,
    };
};

const mapDispatch = (dispatch) => {
    return {
        editMovie: (movie) => dispatch(editMovieThunk(movie)),
        fetchMovie: (id) => dispatch(fetchMovieThunk(id)),
        fetchUsers: () => dispatch(fetchAllUsersThunk()),
    };
};

export default connect(mapState, mapDispatch)(EditMovieContainer);
