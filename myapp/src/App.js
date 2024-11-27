import {BrowserRouter as Router, Routes,Route, Link, NavLink} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      {/* <Router>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Router> */}

      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
