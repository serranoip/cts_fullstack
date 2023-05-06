import "./App.css";
import React from "react";
import Home from "./Components/Pages/MainPages/Home";
import Telemetry from "./Components/Pages/MainPages/Telemetry";
import Images from "./Components/Pages/MainPages/Images";
import Commands from "./Components/Pages/MainPages/Commands";
import Electrical from "./Components/Pages/MainPages/Electrical";
import Communications from "./Components/Pages/MainPages/Comms";
import GroundStation from "./Components/Pages/MainPages/GS";
import OBC from "./Components/Pages/MainPages/OBC";
import GPS from "./Components/Pages/MainPages/GPS";
import ADCS from "./Components/Pages/MainPages/ADCS";
import MPI from "./Components/Pages/MainPages/MPI";
import Boom from "./Components/Pages/MainPages/Boom";
import Misc from "./Components/Pages/MainPages/Misc";

import { BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
  return(
    <>
    <div className="App">
      
      <BrowserRouter>
          <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="images" element={<Images/>}/>
                <Route path="commands" element={<Commands/>}/>
                <Route path="telemetry">
                  <Route index element={<Telemetry/>}/>
                  <Route path="electrical" element={<Electrical/>}/>
                  <Route path="communications" element={<Communications/>}/>
                  <Route path="ground_station" element={<GroundStation/>}/>
                  <Route path="obc" element={<OBC/>}/>
                  <Route path="orbit" element={<GPS/>}/>
                  <Route path="adcs" element={<ADCS/>}/>
                  <Route path="mpi" element={<MPI/>}/>
                  <Route path="boom" element={<Boom/>}/>
                  <Route path="misc" element={< Misc/>}/>
                </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
};

export default App;