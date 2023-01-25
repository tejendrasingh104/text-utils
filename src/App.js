import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App(){
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode enabled','success')
      document.title = 'TextUtilis-Light Mode'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#042970'
      showAlert('Dark mode enabled','success')
      document.title = 'TextUtilis-Dark Mode'
    }
  }
  return(
    <>
    <Navbar title='TextUtils' aboutText='About textUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <Navbar /> */}
    {/* <Navbar title='TextUtils'/> */}
    <div className="container my-3">
      <TextForm heading='Enter the text to analyse' mode={mode} showAlert={showAlert}/>
    </div>
    {/* <div className='container'>
      <About/>
    </div> */}
    
    </>
  );
}
export default App;
