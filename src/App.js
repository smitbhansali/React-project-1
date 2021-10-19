import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = ()=>{
    if (mode === "light")
    {
      setmode("dark");
      document.body.style.backgroundColor = "#1b1818";
      showalert("Dark mode is enabled", "success");
    }
    else
    {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is enabled", "success");
    }
  }
  const [alert, setalert] = useState(null);
  const showalert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar name="Project1" about="About Us" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
            <TextForm heading="Your query" mode={mode} showalert={showalert}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
