import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import inscriptionForm from './pages/inscriptionForm';



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
    <div>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Connexion</button>
      </form>
      <br />
      <Link to="/inscriptionForm" element={<inscriptionForm />}>Inscription</Link>
    </div>
  );
}




export default Login;
