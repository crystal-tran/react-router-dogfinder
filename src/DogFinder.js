import React from 'react';
import { useState } from "react";
import { useParams, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';

const BASE_DOG_URL = "http://localhost:5001/dogs";

/** Component to find a dog from url param and show its details
 *
 * Props:
 * - dogsData an object like [{ name, age, src, facts,...}]
 *
 * States:
 * - None
 *
 * App -> DogFinder -> DogDetails
 *
*/

function DogFinder({ dogsData }) {
  const { dogName } = useParams();

  console.log("DogFinder dogsData:", dogsData, "dogName:", dogName)

  const dogNames = dogsData.map(d => d.src);
  console.log('dogNames:', dogNames)
  // const [dogData, setDogData] = useSState();

  if (!(dogNames.includes(dogName))) {
    return <Navigate to="/" />;
  }

  const dogData = (dogsData.filter(dog => dog.src === dogName))[0];

  return (
    <DogDetails dogName={dogName} dogData={dogData} />
  );
}

export default DogFinder;
