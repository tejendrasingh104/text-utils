import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App(){
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#042970'
    }
  }
  return(
    <>
    <Navbar title='TextUtils' aboutText='About textUtils' mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar /> */}
    {/* <Navbar title='TextUtils'/> */}
    <div className="container my-3">
      <TextForm heading='Enter the text to analyse' mode={mode}/>
    </div>
    {/* <div className='container'>
      <About/>
    </div> */}
    
    </>
  );
}
export default App;
