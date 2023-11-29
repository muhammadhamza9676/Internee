import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Internships from './components/Internships';
import LMS from './components/LMS';
import Job from './components/Job';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/internships' element={<Internships/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/lms' element={<LMS/>} />
          <Route exact path='/jobportal' element={<Job/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
