import React from 'react';
import { Link } from 'react-router-dom'

function Nav(){
  return(
    <ul>
      <li><Link to="/">DogList</Link></li>
      <li><Link to="/dogs/:name">DogDetails</Link></li>
    </ul>
  );


}

export default Nav;