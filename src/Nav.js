import React from 'react';
import { Link } from 'react-router-dom';

/** Nav bar with links to dog list and details routes
 *
 * Props:
 * - dogsData an array like [{ name, age, src, facts,...}]
 *
 * States:
 * -None
 *
 * App -> Nav
*/
//TODO: NavLinks can be used instead of Nav

function Nav({ dogsData }) {
  return (
    <div className="Nav">
      <h2>Navigation:</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        {dogsData.map(d =>
          <li key={d.src}>
            <Link to={`/dogs/${d.src}`}>{d.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Nav;