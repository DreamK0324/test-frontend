import { Link } from "react-router-dom";


const UserView = (props) => {
    const {user, editMovie, allMovies} = props;
    let assignedMovies = allMovies.filter(movie => movie.assigned_to===user.id);
    let availableMovies = allMovies.filter(movie => movie.assigned_to!==user.id);

    return (
        <div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>
            {user.user_first_name + ' ' + user.user_last_name}
        </h1>
        <h3>{user.department_name}</h3>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <div>
            Assigned movies:
            {assignedMovies.length === 0 ? (
                <p>No assigned movies</p>
            ) : (
                assignedMovies.map(movie => (
                <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                    <h4>{movie.description}</h4>
                    </Link>
                    <button onClick={() => { editMovie({ id: movie.id, assigned_to: null }); window.location.reload(); }}>
                    X
                    </button>
                </div>
                ))
            )}
            </div>
            <div>
            Available movies:
            {availableMovies.map(movie => (
                <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                    <h4>{movie.description}</h4>
                </Link>

            <button
            onClick={() => {
            if (movie.assigned_to === null) {
                editMovie({ id: movie.id, assigned_to: user.id });
                window.location.reload();
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
    
        <br />
        <br />
        <Link to={`/edituser/${user.id}`}>
            <button>Edit Information</button>
        </Link>
        <br />
        <br />
        <Link to={`/users`}>Previous Page</Link>
        <br />
        <br />
        <Link to="/">Home Page</Link>
        </div>
    );

};

export default UserView;