// import Card from "./components/Card.jsx"; 
import Card from "./components/Card1.jsx"; 
import MakeCard from "./components/MakeCard.jsx"; 
import Hero from "./components/Hero.jsx";
import Form from "./components/Form.jsx";
import Icon from "./components/icon.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import SimNav from "./components/SimNav.jsx";
import Banner from './components/Banner.jsx'



import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';

import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>  
    <Header/>
    {/* <SimNav/> */}
    {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     {/* <Banner/>  */}
     {/* <Hero/> */}
     {/* <Card/> */}


     
     {/* <MakeCard/> */}

     {/* <Form/> */}

     {/* <Icon/> */}

     
    </>
  );
}

export default App;
