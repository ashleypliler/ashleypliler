import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About /About';
import { Contact } from './components/Contact/Contact';
import {Work} from './components/Work/Work'
import Footer from './components/Footer/Footer';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Home/>}></Route>
        <Route path='/work' index element={<Work/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
