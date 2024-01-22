import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';

const DOG_NAMES = ['duke', 'perry', 'whiskey']

/** Renders DogFinder App
 *
 * Props:
 * - dogNames ["name1", "name2", ...]
 *
 * States:
 *
 *
 * App -> { Nav, DogList, DogDetails }
 */

function App({ dogNames = DOG_NAMES }) {
  return (
    <div>
      <BrowserRouter>
        <Nav dogNames={dogNames} />
        <Routes>
          <Route path="/" element={<DogList dogNames={dogNames} />} />
          <Route path="/dogs/:name" element={<DogDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
