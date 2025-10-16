import React, {useState} from 'react'


const Compteur = () => {
    const [compteur, setCompteur] = useState(0);
    function handleIncrement() {
        setCompteur(compteur + 1);
    }
    function handleDecrement() {
        setCompteur(compteur - 1);
    }
  return (
    <div>
      compteur : {compteur}
      <button onClick={handleIncrement}>Incrementer</button>
      <button onClick={handleDecrement}>Decrementer</button>
    </div>
  )
}

export default Compteur
