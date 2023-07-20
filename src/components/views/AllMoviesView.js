import { Link } from "react-router-dom";

const AllMoviesView = (props) => {
  let {movies, deleteMovie} = props;
  //movies = [{id: 300, title: "hello"}]

  // Sort the movies array based on the "id" property in decreasing order
  movies.sort((a, b) => b.id - a.id);

  if (!movies.length) {
    return (
    <div>
      <p>There are no movies.</p>
      <Link to={`/newmovie`}>
        <button>Add New Movie</button>
      </Link>
      <br/>
      <br/>
      <Link to="/">Home Page</Link>
    </div>
    );
  }
  
  return (
    <div>
      <h1>All Movies</h1>
      {movies.map((movie) => {
        let movieTitle = movie.title;
        let releaseDate = movie.releaseDate;
        let rate = movie.rate;
        return (
          <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            {"   "+movieTitle+"   "}
          </Link>
          <button onClick={() => deleteMovie(movie.id)}>X</button>
          <p>Release Date: {releaseDate}</p>
          <p>Rate: {rate}</p>
          <h3>------------------------</h3>
          </div>
        );
      }
      )}
      <Link to={`/newmovie`}>
        <button>Add New Movie</button>
      </Link>
      <br></br>
      <br/>
      <Link to={`/`}>Home Page</Link>
      
    </div>
  );
};


export default AllMoviesView;