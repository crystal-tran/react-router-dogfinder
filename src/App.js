import './App.css';
import Nav from './Nav';
import DogList from './Doglist';
import DogDetails from './DogDetails';

/** Renders DogFinder App
 *
 * Props:
 *
 * States:
 *
 *
 * App -> { Nav, DogList, DogDetails }
 */

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<DogList />} />
        <Route path="/dogs/:name" element={<DogDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
