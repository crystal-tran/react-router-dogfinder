import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';

const BASE_DOG_URL = "http://localhost:5001/dogs";

/** Component to find a dog from url param and show its details
 *
 * Props:
 * - dogNames ["name1", "name2", ...]
 *
 * States:
 * - None
 *
 * App -> DogFinder -> DogDetails
 *
*/

function DogFinder({ dogNames }) {
  const { dogName } = useParams();

  if (!(dogNames.includes(dogName))) {
    return <Navigate to="/" />;
  }

  let dogData;
  async function getDog() {
    const response = await fetch(BASE_DOG_URL);
    const data = await response.json();
    dogData = data;
  }


  return (
    <div>
      <DogDetails dogName={dogName} dogData={dogData} />
      <button onClick={getDog}>Get Dog!</button>
    </div>
  );
}

export default DogFinder;