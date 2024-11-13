import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import home from './component/home';
import about from './component/about';

function App() {
  return (
    <>
      <Router>
        <Link to=''>Home</Link>
        <Link to='/about'>about</Link>
        <Routes>
        <Route path='' Component={home} />
        <Route path='/about' Component={about} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
