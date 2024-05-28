import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Hero from './Hero';
import Addnew from './Addnew';
import Footer from './Footer';
import { useState } from 'react';
import JoinIn from './JoinIn';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import AddNewPage from './AddNewPage';

function App() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleToggle = () => {
    setShowSignIn(!showSignIn);
  };
 
  
  return (
    
  
     <div>
      <Navbar />
      <a onClick={() => setShowSignIn(true) } className= 'sign-in'>Sign In</a>
     <a onClick={() => setShowSignIn(false)} className= 'join-in'>Join In</a>
     {showSignIn ? <Header /> : <JoinIn />}
      <Hero />
      <Addnew />
      <Footer />
     
     </div>
    
  );
}

export default App;
