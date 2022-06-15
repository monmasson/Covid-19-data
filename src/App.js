import "./App.css";
import React from "react";

import Home from "./components/Home";
import Info from "./components/Info";
import CovidData from "./components/CovidData";
import News from "./components/News";
import SignUp from "./components/SignUp";
import Articles from "./components/Articles";

import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import TrackUsa from "./components/TrackUsa";





function App() {
  const {t } = useTranslation()

return <div class="text-center text-md-right">

 <Routes>

      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<CovidData />} /> {/*Language === "english"? <Coviddata/>: "<CovidData/>" have second component for spanish */}
      <Route path="/Info" element={<Info />} />
      <Route path="/News" element={<News />} />
      <Route path ="/sign-up" element={<SignUp/>}/>
      <Route path ="/TrackUsa" element={<TrackUsa/>}/>
      <Route path="/Articles" element={<Articles/>}/>

    </Routes>


  </div>;
}

export default App;