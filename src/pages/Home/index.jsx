import React from "react";
import "../../styles/dramalair.css"
import "../../styles/home.css"
import Loader from '../../components/Loader';
import TextArea from '../../components/TextArea';





function Home() {
  return (
    <div>
    <Loader />
    <div className="content">
      <h1>Vide ton sac</h1>
      <TextArea/>
    </div>
    </div>
  );
}

export default Home;

