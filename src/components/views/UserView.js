import { Link } from 'react-router-dom';

const UserView = ({ user, editMovie, allMovies }) => {
  const{id, firstname, lastname, email } = user;

  console.log('User:', user);

  if (!user) {
    console.log('User is null or undefined');
    return <div>Loading...</div>;
  }
 
  // console.log('User ID:', id);
  // console.log('First Name:', firstname);
  // console.log('Last Name:', lastname);
  // console.log('Email:', email);

  if (!Array.isArray(allMovies)) {          // check if the allMovies variable is an array
    console.error('allMovies is not an array:', allMovies);
    return <div>Loading...</div>;
  }

  console.log('user movie:', allMovies);
  

  let assignedMovies = allMovies.filter(movie => movie.userId === id);
  let availableMovies = allMovies.filter(movie => movie.userId !== id);

  
  return (
    <div >
      <h1>User Details</h1>
      <p>ID: {id}</p>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Email: {email}</p>


      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div>
          Assigned Movies:
          {assignedMovies.length === 0 ? (
              <p>No assigned movies</p>
            ) : (

              assignedMovies.map(movie => {
                // console.log("Assigned Movie:", movie);
                return (
                  <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                      <h4>{movie.title}</h4>
                    </Link>
                    <button
                      onClick={() => {
                        editMovie({ id: movie.id, userId: null });
                      }}
                    >
                      X
                    </button>
                  </div>
                );
              })
    
            )}
        </div>
        <div>
          Available Movies:
          {availableMovies.map(movie => (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <h4>{movie.title}</h4>
              </Link>

              <button
                onClick={() => {
                  if (movie.userId === null) {
                    editMovie({ id: movie.id, userId: user.id });
                  } else {
                    alert("This movie is already assigned to another user.");
                  }
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>



      <Link to={`/edituser/${id}`}>Edit Information</Link>
      <br/>
      <Link to="/users">Back to All Users</Link>
      <br/>
      <Link to="/">Go Home</Link>
    </div>
  );
};


export default UserView;
