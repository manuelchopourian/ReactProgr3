import React from "react";
import Footer from "./Components/Footer/Footer";
import Peliculas from "./Components/Peliculas/Peliculas";
import Topbar from "./Components/Topbar/Topbar";
import './app.css'

function App() {
  return (
    <body>
        <Topbar/>
        <Peliculas/>
        <Footer/>
    </body>
  );
}
export default App;
