import { React } from 'react';
import './App.css';
import Temperatura from './Componentes/Temperatura';
import HumedadREL from './Componentes/HumedadREL';
import HumedadABS from './Componentes/HumedadABS';
import Presion from './Componentes/PresionBar';

function App() {

  const temperatura = () => {
    window.location.href = "http://127.0.0.1:5500/Graficas/Temperatura/temperatura.html";
  }

  const velViento = () => {
    window.location.href = "http://127.0.0.1:5500/Graficas/VelocidadViento/velViento.html";
  }

  const humRel = () => {
    window.location.href = "http://127.0.0.1:5500/Graficas/HumedadREL/humedadREL.html";
  }

  const dirViento = () => {
    window.location.href = "http://127.0.0.1:5500/Graficas/GraficaRadial/radial.html";
  }

  const humabs = () => {
    window.location.href = "http://127.0.0.1:5500/Graficas/HumedadABS/humedadABS.html";
  }

  const pres = () => {
    window.location.href = "http://127.0.0.1:5500/Graficas/PresionBar/presionBar.html";
  }


  return (
    <div className="general">

      <div className='titulo'>
        DASHBOARD
      </div>

      <div className='body'>
        <div className='row'>
          <div className='temp'>
            <Temperatura />
            <button onClick={temperatura} className="color-transition">VER GRÁFICA DE TEMPERATURA</button>
            <br />
            <br />
          </div>

          <div className='humRel'>
            <HumedadREL />
            <button onClick={humRel} id="boton-REL">VER GRÁFICA DE HUMEDAD RELATIVA</button>
            <br />

          </div>
        </div>
        <div className='row'>
          <div className='luz'>
            <HumedadABS />
            <button onClick={humabs} id="boton-ABS">VER GRÁFICA DE CANTIDAD DE LUZ</button>
            <br />
          </div>

          <div className='air'>
            <Presion />
            <button onClick={pres} class="gradient-button">VER GRÁFICA DE CALIDAD DEL AIRE</button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
