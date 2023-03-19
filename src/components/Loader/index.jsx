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

  return (
    <div className={`loader ${loading ? "show" : "hide"}`}>
      <div className="typing-text">Ceci est mon histoire</div>
    </div>
  );
};

export default Loader;
