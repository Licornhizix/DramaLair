import React from "react";
import "../../styles/dramalair.css"
import "../../styles/home.css"
import Loader from '../../components/Loader';





function Home() {
  return (
    <div>
    <Loader />
    <div className="content">
      <h1>Je suis en page home</h1>
    </div>
    </div>
  );
}

export default Home;

