
import './App.css';
import Details from './comonentes/Details';
import carro1 from './assets/carro1.jpg';
import carro2 from './assets/carro2.png';
import carro3 from './assets/carro3.jpg';

const carros = [

  {id:1, foto: carro1, nome:'Commander', marca:'Fiat', ano: 2023, cor:'vermelho'},
  {id:2, foto: carro2, nome:'Civic', marca:'honda', ano: 2023, cor:'Branco'},
  {id:3, foto: carro3, nome:'Corolla', marca:'Toyota', ano: 2023, cor:'Branco'},

]

function App() {
  return (
    <div className="App">

      <div className="container">
        
        <h1> Card de Carro </h1>

        <div className="container_card">

          <div className="cards">

            {carros.map((carro) => (

              <Details  
                key={carro.id}
                foto={carro.foto}
                nome={carro.nome}
                marca={carro.marca}
                ano={carro.ano}
                cor={carro.cor}
 
              /> 

            ))}

        </div>
      </div>
    </div>



      {/* <Details  myCarro={carros}/> */}

    </div>
  );
}

export default App;
