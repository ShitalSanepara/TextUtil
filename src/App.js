
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import Enable from './components/Enable';
// import NewFrom from './components/NewFrom';
import Alert from './components/Alert';
import React, { userState } from 'react'; 
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Routes
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not 
  // document.body.style.backgroundColor = '#042743';
  document.title = 'TextUtils - Dark Mode';

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type 
      })
      setTimeout(() => {
        setAlert(null);
      },3000);
  }
  const toggleMode  = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  } 
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/> 
    <div className="container ">
     <Routes>
          <Route path="/about" element={<About/>}>
            
          </Route> 
           <Route path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/>}>
            
          </Route> 
      </Routes> 
      
      </div>
      </Router> 
      
      {/* <Enable/>  */}
     {/* <NewFrom/> */}
    
    </>
  ); 
}



