import React, { useState } from "react";
import "../../styles/textarea.css"

function TextArea() {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Envoyer le texte à la page "stream"
    // Utilisez fetch ou axios pour envoyer une requête POST au serveur
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="textarea">
    <form onSubmit={handleSubmit}>
      <label>
        Écrivez votre texte :
        <textarea value={text} onChange={handleChange} />
      </label>
      <button type="submit">Publier</button>
    </form>
    </div>
  );
}

export default TextArea;
