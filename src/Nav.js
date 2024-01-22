import React from 'react';
import { Link } from 'react-router-dom'

/** Nav bar with links to dog list and details routes
 *
 * Props:
 * - dogNames ["name1", "name2", ...]
 *
 * States:
 * -None
 *
 * App -> Nav
*/


function Nav({ dogNames }){
  return(
    <div className="Nav">
      <h2>Navigation:</h2>
      <ul>
        <li><Link to="/">Home - Dog List</Link></li>
        {dogNames.map(dogName =>
            <li key={dogName}>
              <Link to={`/dogs/${dogName}`}>{dogName}</Link>
            </li>
        )}
      </ul>
    </div>
  );


}

export default Nav;