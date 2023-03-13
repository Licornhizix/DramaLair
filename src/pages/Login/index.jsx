import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InscriptionForm from '../InscriptionForm';
import "../../styles/whispergate.css"
import "../../styles/loginform.css"



function Login() {
 


  // Initialisez les états locaux pour le nom et l'email
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  // Gérez les soumissions du formulaire
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Connexion soumise: Nom=${nom}, Email=${email}`);
    // Ici, vous pouvez envoyer les données du formulaire à votre backend pour traitement
  }

  return (
    <div className="content">
      <h1>Login</h1>
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
        <button type="submit">Connexion</button>
      </form>
      <br />
      <Link to="/InscriptionForm">Inscription</Link>
    </div>
  );
}




export default Login;
