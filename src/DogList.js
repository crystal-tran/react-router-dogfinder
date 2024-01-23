import React from "react";
import { useState } from "react";
import "./DogList.css"

const BASE_DOG_URL = "http://localhost:5001/dogs";

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
  const [dogData, setDogData] = useState();
  console.log("dogData:", dogData);


  /** Get data for dog being found from server and set state of dogData */
  async function getDogData() {
    const response = await fetch(BASE_DOG_URL);
    const data = await response.json();
    setDogData(data);
  }

  if (dogData === undefined) {
    getDogData();
  }

  return (
    <div className="DogList">
      <h2>Dog List:</h2>
      <ul>
        {dogData.map(d =>
          <li key={d.src}>
            <img
              className="DogList-img"
              src={process.env.PUBLIC_URL + `/${d.src}.jpg`} />
            <br />
            {d.name}
          </li>
        )}
      </ul>
    </div>
  );

}

export default DogList;