import "./App.css";
import React from "react";
import Home from "./components/Home";
import Info from "./components/Info";
import CovidData from "./components/CovidData";
import News from "./components/News";

import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return <div class="text-center text-md-right">"


    <Routes>

      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<CovidData />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/News" element={<News />} />


    </Routes>


  </div>;
}

export default App;