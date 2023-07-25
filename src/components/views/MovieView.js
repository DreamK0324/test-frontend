import { Link } from 'react-router-dom';

const MovieView = ({ movie, user }) => {
  // console.log('Movie:', movie);

  if (!movie) {
    console.log('Movie is null or undefined');
    return <div>Loading...</div>;
  }

  const { id, title, releaseDate, rate, userId } = movie;

  // console.log('Movie ID:', id);
  // console.log('Title:', title);
  // console.log('Release Date:', releaseDate);
  // console.log('Rate:', rate);

  return (
    <div>
      <h1>Movie Details</h1>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Rate: {rate}</p>

      {userId ? (
        <h3>
          UserId: {userId}
          <br/>
          User: {user.firstname} {user.lastname} 
        </h3>
      ) : (
        <h3>No User</h3>
      )}
      
      <Link to={`/editmovie/${id}`}>Edit Information</Link>
      <br/>
      <Link to="/movies">Back to All Movies</Link>
      <br/>
      <Link to="/">Go Home</Link>
    </div>
  );
};


export default MovieView;
