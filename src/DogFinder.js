import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';

/** Component to find a dog from url param and show its details
 *
 * Props:
 * - dogsData an array like [{ name, age, src, facts,...}]
 *
 * States:
 * - None
 *
 * App -> DogFinder -> DogDetails
 *
*/

function DogFinder({ dogsData }) {
  const { dogName } = useParams();
  const dogNames = dogsData.map(d => d.src);

  if (!(dogNames.includes(dogName))) {
    return <Navigate to="/" />;
  }

  /**get dog object for matching dog name in url */
  const dogData = (dogsData.filter(dog => dog.src === dogName))[0];

  return (
    <DogDetails dogData={dogData} />
  );
}

export default DogFinder;
