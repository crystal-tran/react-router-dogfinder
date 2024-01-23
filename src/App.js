import './App.css';
import Nav from './Nav';
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogList from './DogList';
import DogFinder from './DogFinder';

const BASE_DOG_URL = "http://localhost:5001/dogs";

/** Renders DogFinder App
 *
 * Props:
 * - dogNames ["name1", "name2", ...]
 *
 * States:
 *- dogsData [{ name, age, src, facts }, ...]
 *
 * App -> { Nav, DogList, DogFinder }
 */

function App() {
  const [dogsData, setDogsData] = useState();
  console.log("App dogsData:", dogsData);

   /** Get data for dogs being found from server and set state of dogsData */
   async function getDogsData() {
    const response = await fetch(BASE_DOG_URL);
    const data = await response.json();
    setDogsData(data);
  }

  let dogNames = [];
  if (dogsData === undefined) {
    getDogsData();
  }
  else {
    dogNames = dogsData.map(d => d.name);
  }

  return (
    <div>
        {
          dogsData
          ? <BrowserRouter>
            <Nav dogNames={dogNames} />
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
