import "./App.css";

//Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Components
import {
  HomePageContainer,

  AllMoviesContainer,
  MovieContainer,
  NewMovieContainer,
  EditMovieContainer,

  AllUsersContainer,
  UserContainer,
  NewUserContainer,
  EditUserContainer,
} from './components/containers';

import { Provider } from 'react-redux'; // Import the Provider component
import store from './store'; // Import your Redux store

// if you create separate components for adding/editing 
// a movie or user, make sure you add routes to those
// components here

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your App component with the Provider component */}
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePageContainer />} />

            <Route exact path="/movies" element={<AllMoviesContainer />} />
            <Route exact path="/movie/:id" element={<MovieContainer />} />
            <Route exact path="/newmovie" element={<NewMovieContainer />} />
            <Route exact path="/editmovie/:id" element={<EditMovieContainer />} />


            <Route exact path="/users" element={<AllUsersContainer />} />
            <Route exact path="/user/:id" element={<UserContainer />} />
            <Route exact path="/newuser" element={<NewUserContainer />} />
            <Route exact path="/edituser/:id" element={<EditUserContainer />} />
            
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}





export default App;