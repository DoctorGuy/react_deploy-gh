import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from
'react-router-dom';
import './App.css';
import Home from './components/Pages/home.js';
import python from './components/Pages/python.js';
import Rproj from './components/Pages/R.js';
import Rasppi from './components/Pages/Rasppi.js';
import aboutme from './components/Pages/aboutme.js';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component=
        {Home} />
                <Route path='/Python' exact Component=
        {python} />
        <Route path='/Rprojects' exact Component=
        {Rproj} />
        <Route path='/Raspberrypi' exact Component=
        {Rasppi} />
        <Route path='/about-me' exact Component=
        {aboutme} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
