import React from 'react';
import DogDetails from './DogDetails';

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

  return (
    <DogDetails dogName={dogName} />
  );
}

export default DogFinder;