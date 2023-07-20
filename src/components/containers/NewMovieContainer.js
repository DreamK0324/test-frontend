import React, { useState } from "react";
import { connect } from "react-redux";
import { addMovieThunk } from "../../store/thunks";
import { NewMovieView } from "../views";

const NewMovieContainer = ({ addMovie }) => {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [rate, setRate] = useState('');
    const [error, setError] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        if (name === 'title') {
          setTitle(value);
        } else if (name === 'releaseDate') {
          setReleaseDate(value);
        } else if (name === 'rate') {
          setRate(value);
        }
    };
    
    const handleSubmit = async event => {
        event.preventDefault();
        if( title === '') {
          setError('Title field are required');
          return;
        }

        if( releaseDate === '') {
            setError('Release date field are required');
            return;
        }
        
        if(rate === '') {
          setError('Email field are required');
          return;
        }
      
    
        const movie = {
          title,
          releaseDate,
          rate,
        };
    
        const newMovie = await addMovie(movie);
    
        setError('');
        window.location.href = `/movie/${newMovie.id}`;
    };


    return (
        <NewMovieView
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
    );

};

const mapDispatch = dispatch => {
    return {
      addMovie: movie => dispatch(addMovieThunk(movie)),
    };
};
  
export default connect(null, mapDispatch)(NewMovieContainer);