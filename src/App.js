import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//TODO: ask about VSCode red underlining
import DogList from './DogList';
import DogFinder from './DogFinder';

const DOG_NAMES = ['duke', 'perry', 'whiskey']

/** Renders DogFinder App
 *
 * Props:
 * - dogNames ["name1", "name2", ...]
 *
 * States:
 *
 *
 * App -> { Nav, DogFinder, DogDetails }
 */

function App({ dogNames = DOG_NAMES }) {
  return (
    <div>
      <BrowserRouter>
        <Nav dogNames={dogNames} />
        <Routes>
          <Route path="/" element={<DogList dogNames={dogNames} />} />
          <Route path="/dogs/:dogName" element={<DogFinder dogNames={dogNames}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
