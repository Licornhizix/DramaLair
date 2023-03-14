import React, { useState } from 'react';
import "../../styles/whispergate.css"
import "../../styles/inscriptionform.css"


function FormInscription() {
  // Initialisez les états locaux pour le nom et l'email
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  // Gérez les soumissions du formulaire
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Inscription soumise: Nom=${nom}, Email=${email}`);
    // Ici, vous pouvez envoyer les données du formulaire à votre backend pour traitement
  }

  return (
    <div className="content">
      <div className='form-inscription'>
      <h1>Inscription</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
          placeholder="Name"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Mail"
        />
      </label>
      <br />
      <button type="submit">Valider</button>
    </form>
    </div>
    </div>
  );
}

export default FormInscription;
