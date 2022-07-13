import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import Textform from './component/Textform.js';
import React,{useState} from 'react';

 

function App() {
  const[mode,setmode]=useState('light');      //whether dark mode is enabled or not
   const toggleMode =() =>{
    if(mode ==='light'){
      setmode('dark');
    }
    else{
      setmode('light');
    }
   
   }
  return (
    
  <>
    <Navbar mode={setmode} toggleMode={toggleMode}/> 
    <div class='container-sm'>
      <Textform/>

    </div>
    </>






 );
}

export default App;
