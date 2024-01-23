import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./DogList.css"

const BASE_DOG_URL = "http://localhost:5001/dogs";

/** Dog list component to show all of the dog info
 *
 * Props:
 * - dogsData [{ name, age, src, facts }, ...]
 *
 * States:
 * - None
 *
 *
 */

function DogList({ dogsData }) {

  console.log("DogList dogData:", dogsData);

  return (
    <div className="DogList">
      <h2>Dog List:</h2>
      <ul>
      {dogsData.map(d =>
            <li key={d.src}>
              <img
                className="DogList-img"
                src={process.env.PUBLIC_URL + `/${d.src}.jpg`} />
              <br />
              <Link to={`/dogs/${d.src}`}>{d.name}</Link>
            </li>
      )}
      </ul>
    </div>
  );

}

export default DogList;