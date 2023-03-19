import React, { useEffect, useState } from "react";
import "../../styles/loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  function stopLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hide-loader');
  }

  return (
    <div className={`loader ${loading ? "show" : "hide"}`} onClick={stopLoader}>
      <div className="typing-text">Ceci est mon histoire</div>
    </div>
  );
};

export default Loader;
