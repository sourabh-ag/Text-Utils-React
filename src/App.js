// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert =(message, type)=>
  {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>
  {
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor ="#0a031f";
      showAlert("Dark Mode has been enabled", "success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container'>
          <h3 className={`text-${mode ==='light'?'dark':'light'}`}>Enter text to analyze</h3>
          <TextForm showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;

