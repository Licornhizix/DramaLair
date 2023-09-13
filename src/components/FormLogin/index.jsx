import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/dramalair.css"
import "../../styles/loginform.css"
import InscriptionPage from '../../pages/InscriptionPage';



function FormLogin() {
 


  // Initialisez les états locaux pour le nom et l'email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Gérez les soumissions du formulaire
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Connexion soumise: Email=${email}, Password=${password}`);
    // Ici, vous pouvez envoyer les données du formulaire à votre backend pour traitement
  }

  return (
    <div className="content">
      <div className='form-login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Mail"
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Mot de passe"
          />
        </label>
        <br />
        <button type="submit">Connexion</button>
      </form>
      <br />
      <Link to={"/InscriptionPage"}>Inscription</Link>
    </div>
    </div>
  );
}




export default FormLogin;
