import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import CoursesHome from './components/allCourses/CoursesHome';
import Blog from './components/Blog/Blog';
import Header from './components/common/heading/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/home/hero/Home';
import Price from './components/Pricing/Price';
import Team from './components/Team/Team';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/courses' element={<CoursesHome />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/pricing' element={<Price />}></Route>
        <Route path='/journal' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
