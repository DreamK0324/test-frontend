import "./App.css";

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import {
  HomePageContainer,
} from './components/containers';

// if you create separate components for adding/editing 
// a movie or user, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;