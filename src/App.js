import './App.css';
import Nav from './Nav';
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogList from './DogList';
import DogFinder from './DogFinder';

const BASE_DOG_URL = "http://localhost:5001/dogs";

/** Renders DogFinder App
 *
 * Props: None
 *
 * States:
 *- dogsData [{ name, age, src, facts }, ...]
 *
 * App -> { Nav, DogList, DogFinder }
 */

function App() {
  const [dogsData, setDogsData] = useState();

  /** Get data for dogs being found from server and set state of dogsData */
  async function getDogsData() {
    const response = await fetch(BASE_DOG_URL);
    const data = await response.json();
    setDogsData(data);
  }

  if (dogsData === undefined) {
    getDogsData();
  }

  return (
    <div>
      {
        dogsData
          ? <BrowserRouter>
            <Nav dogsData={dogsData} />
            <Routes>
              <Route path="/" element={<DogList dogsData={dogsData} />} />
              <Route path="/dogs/:dogName" element={<DogFinder dogsData={dogsData} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
          : <h1>Woof! Loading Dog Data...</h1>
      }
    </div>
  );
}

export default App;
