import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './Pages/Home.js'
import {Route,Routes,BrowserRouter as Router, Navigate} from 'react-router-dom'
import Signup from './Pages/SignUp.js'
import Login from './Pages/Login.js';
import Resumeform from './Components/Resumeform.js'
import Cxocofounder from './Pages/Cxocofounder.js'
import { useSelector } from "react-redux";
import ResumePrice from './Components/ResumePrice.js'

function App() {
  const token = useSelector((state) => state.userData?.token);
  console.log(token,"token in app.js")
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/Signup"
            element={!token ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/Resumeform"
            // element={<Resumeform />}
            element={token ? <Resumeform /> : <Navigate to="/Login" />}
          />

          <Route
            path="/ResumePrice"
            element={token ? <ResumePrice /> : <Navigate to="/Login" />}
          />

          {/* <Route
            path="/job-advice"
            element={token ? <JobAdvice /> : <Navigate to="/Login" />}
          />

          <Route
            path="/logokitForm"
            element={token ? <LogokitForm /> : <Navigate to="/Login" />}
          />
          <Route
            path="/videoResumeForm"
            element={token ? <VideoResumjeform /> : <Navigate to="/Login" />}
            
          />
          <Route
            path="WebsiteForm"
            element={token ? <WebsiteForm />: <Navigate to="/Login" />}
            
          /> */}

          <Route
            path="/Cxocofounder"
            element={token ? <Cxocofounder /> : <Navigate to="/Login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
