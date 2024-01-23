import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

/** DogList component to show all of the dogs and their images
 *
 * Props:
 * - dogsData [{ name, age, src, facts }, ...]
 *
 * States:
 * - None
 *
 * App -> DogList
 */

function DogList({ dogsData }) {
  return (
    <div className="DogList">
      <h2>Dog List:</h2>
      <ul>
        {dogsData.map(d =>
          <li key={d.src}>
            <Link to={`/dogs/${d.src}`}>{d.name}</Link>
            <br />
            <img
              className="DogList-img"
              src={process.env.PUBLIC_URL + `/${d.src}.jpg`} />
            <br />
          </li>
        )}
      </ul>
    </div>
  );
}

export default DogList;