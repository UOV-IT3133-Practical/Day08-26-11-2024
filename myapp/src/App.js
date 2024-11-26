import {BrowserRouter as Router, Routes,Route, Link, NavLink} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
