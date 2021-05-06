// import {Videolist} from "./VideoListing/VideoListing";
import { NavBar } from "./Navbar/Navbar";
import { Routes, Route, Router } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar"
import {VideoListing} from "./VideoListing/VideoListing";
import {VideoPlayer} from "./VideoPlayer/VideoPlayer"
import "./App.css";

function App() {
  return (

    <div className="App">
      <NavBar />
      <div className="main">
          <SideBar />
          <Routes>
          <Route path='/' element={<VideoListing />}></Route>
          <Route path='/video/:videoId' element={<VideoPlayer />}></Route>
          </Routes>
      </div>
    </div>
  );
  
}

export default App;
