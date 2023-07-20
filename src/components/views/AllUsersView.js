import { Link } from "react-router-dom";

const AllUsersView = (props) => {
  let { users, deleteUser } = props;

  // Sort the users array based on the "id" property in ascending order
  users.sort((a, b) => a.id - b.id);

  if (!users.length) {
    return (
      <div>
        <p>There are no users.</p>
        <Link to="/newuser">
          <button>Add New User</button>
        </Link>
        <br />
        <br />
        <Link to="/">Home Page</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>All Users</h1>
      {users.map((user) => {
        let name = user.firstname + " " + user.lastname;
        return (
          <div key={user.id}>
            <Link to={`/user/${user.id}`}>{name}</Link>
            <button onClick={() => { deleteUser(user.id); window.location.reload(); }}>X</button>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <h3>------------------------</h3>
          </div>
        );
      })}
      <br />
      <br />
      <Link to="/newuser">
        <button>Add New User</button>
      </Link>
      <br />
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default AllUsersView;
