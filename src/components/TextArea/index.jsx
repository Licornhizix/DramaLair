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
        <textarea value={text} onChange={handleChange} placeholder="Hier je suis rentré dans mon appart miteux. J'étais cramé après mon bullshit taf. De la fenêtre, j'ai vu ma voisine blonde se faire emballer par un outsider gros et chauve. Quand à moi je suis seul depuis deux ans..." />
      </label>
      <button type="submit">Publier</button>
    </form>
    </div>
  );
}

export default TextArea;
