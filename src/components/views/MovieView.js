import React from 'react';
import { Link } from 'react-router-dom';

const MovieView = ({ movie }) => {
  console.log('Movie:', movie);

  if (!movie) {
    console.log('Movie is null or undefined');
    return <div>Loading...</div>;
  }

  const { id, title, releaseDate, rate } = movie;

  console.log('Movie ID:', id);
  console.log('Title:', title);
  console.log('Release Date:', releaseDate);
  console.log('Rate:', rate);

  return (
    <div>
      <h1>Movie Details</h1>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Rate: {rate}</p>
      <Link to="/movies">Back to All Movies</Link>
    </div>
  );
};


export default MovieView;
