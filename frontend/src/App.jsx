import { useState } from 'react';

function App() {

  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const fetchAPI = (cityName) => {
    fetch(`http://localhost:8081/ciudades/${cityName}`)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };


//No logré conectar  
  return (
    <div>
      <div>
        <form onSubmit={()=> fetchAPI(input)}>
          <h1>Coloque el nombre de una ciudad para conocer su población!</h1>
          <div className="barraBusqueda">
            <input
              type="text"
              placeholder="Busca ciudades"
              autoComplete="off"
              onChange={handleChange}
              value={input}
            />
            <button onClick={()=> fetchAPI(input)}>
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
