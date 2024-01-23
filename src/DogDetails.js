import React from 'react';
import './DogDetails.css';

/** Component to show details for a dog
 *
 * Props:
 * - dogData { name, age, src, facts }
 *
 * State: None
*/

function DogDetails({ dogData }) {
  return (
    <div className="DogDetails">
      <h1>{dogData.name}</h1>
      <h2>Age: {dogData.age}</h2>
      <img
        className="DogDetails-img"
        src={`/${dogData.src}.jpg`}
        alt={dogData.src}
        />
      <ul>
        {dogData.facts.map((fact, idx) =>
          <li key={`fact-${idx}`}>{fact}</li>
        )}
      </ul>
    </div>
  );
}

export default DogDetails;