import React from 'react';
import { useState } from "react";
import { useParams, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';

const BASE_DOG_URL = "http://localhost:5001/dogs";

/** Component to find a dog from url param and show its details
 *
 * Props:
 * - dogNames ["name1", "name2", ...]
 *
 * States:
 * - dogData an object like { name, age, src, facts,...}
 *
 * App -> DogFinder -> DogDetails
 *
*/

function DogFinder({ dogNames }) {
  const { dogName } = useParams();
  const [dogData, setDogData] = useState();

  if (!(dogNames.includes(dogName))) {
    return <Navigate to="/" />;
  }

  /** Get data for dog being found from server and set state of dogData */
  async function getDogData() {
    const response = await fetch(BASE_DOG_URL);
    const data = await response.json();

    const dogDataResult = (data.filter(dog => dog.src === dogName))[0];
    setDogData(dogDataResult);
  }

  if (dogData === undefined || dogName !== dogData.src) {
    getDogData();
  }

  return (
    <div>
      {
        dogData
          ? <DogDetails dogName={dogName} dogData={dogData} />
          : <h2>Woof! Loading Dog Details...</h2>
      }
    </div>
  );
}

export default DogFinder;
