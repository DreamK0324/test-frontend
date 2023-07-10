import { Link } from "react-router-dom";

const MovieView = (props) => {
  const { movie, user } = props;
  return (
    <div>
      <h1>{movie.description}</h1>
      {movie.assigned_to ? (
        <h3>
          User: {user.user_first_name} {user.user_last_name} 
        </h3>
      ) : (
        <h3>Unassigned</h3>
      )}

      <div>
        Status: {movie.completion_status ? 'Complete' : 'Incomplete'}
      </div>
      <br/>
      <br/>
      <Link to={`/editmovie/${movie.id}`}>Edit movie information</Link>
      <br/>
      <br/>
      <Link to={`/movies`}>View all movies</Link>
      <br/>
      <br/>
      <Link to={`/movies`}>Previous Page</Link>
      <br/>
      <br/>
      <Link to="/">Home Page</Link>
    </div>
  );

};

export default MovieView;