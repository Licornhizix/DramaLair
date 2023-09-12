import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fonction pour récupérer le nombre de visiteurs (vous devrez adapter cela à votre backend ou méthode de suivi)
    // Par exemple, vous pouvez utiliser une API pour obtenir le nombre de visiteurs.
    // Pour cet exemple, nous utiliserons un compteur fictif initial.
    const fetchVisitorCount = async () => {
      // Remplacez cette partie par l'appel à votre API ou autre méthode de suivi.
      const response = await fetch('/api/visitor-count');
      const data = await response.json();
      setCount(data.visitorCount);
    };

    // Appelez fetchVisitorCount immédiatement pour obtenir le compteur initial.
    fetchVisitorCount();

    // Définissez un intervalle pour mettre à jour automatiquement le compteur toutes les 1 minute (ou selon votre préférence).
    const interval = setInterval(fetchVisitorCount, 60000); // 1 minute = 60000 millisecondes

    // Nettoyez l'intervalle lorsque le composant est démonté pour éviter les fuites de mémoire.
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter">
      <p>Visitors : {count}</p>
    </div>
  );
};

export default Counter;
