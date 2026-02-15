import { useState } from "react";
import { Navbar } from "./component/Navbar";
import Movies from "./component/Movies";
import Watchlist from "./component/Watchlist";
import "./App.css";
import { BrowserRouter , Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
