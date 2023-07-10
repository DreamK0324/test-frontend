import "./App.css";

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import {
  HomePageContainer,
  AllMoviesContainer,
  AllUsersContainer,
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
            <Route path="/" element={<HomePageContainer />} />
            <Route path="/movies" element={<AllMoviesContainer />} />
            <Route path="/users" element={<AllUsersContainer />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}


export default App;