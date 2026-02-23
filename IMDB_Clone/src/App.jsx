// import { useState } from "react";
// import Navbar  from "./component/Navbar";
// import Movies from "./component/Movies";
// import Watchlist from "./component/Watchlist";
// import Banner from "./component/Banner";
// import "./App.css";
// import { BrowserRouter , Routes, Route} from "react-router-dom";

// function App() {
//   let [watchlist, setWatchlist] = useState([]);

//   let handleAddtoWatchlist = (movie) => {
//     let newWatchlist = [...watchlist, movie];
//     setWatchlist(newWatchlist);
//     console.log(newWatchlist);
//   };

//   let handleRemoveFromWatchlist = (movie) => {
//     let newWatchlist = watchlist.filter((m) => m.id !== movie.id);
//     setWatchlist(newWatchlist);
//     console.log(newWatchlist);
//   }
  
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<><Banner/><Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /> </>} />
//           <Route path="/watchlist" element={<Watchlist watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import Navbar from "./component/Navbar";
import Movies from "./component/Movies";
import Watchlist from "./component/Watchlist";
import Banner from "./component/Banner";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movie) => {
    let newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemoveFromWatchlist = (id) => {
    let newWatchlist = watchlist.filter((m) => m.id !== id);
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;