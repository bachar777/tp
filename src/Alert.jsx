import React from 'react'

const Alert = () => {
    const [name, setName] = React.useState('');

    function handleAlert() {
        alert(`Bonjour ${name}`);
    }

  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAlert}>Alerter</button>
      
    </div>
  )
}

export default Alert
