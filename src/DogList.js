import React from "react";

/** Dog list component to show all of the dog info
 *
 * Props:
 * - dogNames ["name1", "name2", ...]
 *
 * States:
 * - None
 *
 *
 */

function DogList({ dogNames }) {
  return (
    <div className="DogList">
      <h2>Dog List:</h2>
      <ul>
        {dogNames.map(dogName =>
          <li key={dogName}>
            {dogName}
          </li>
        )}
      </ul>
    </div>
  );

}

export default DogList;