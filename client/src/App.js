import React from "react";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
