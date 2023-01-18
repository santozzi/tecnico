import React,{useState} from 'react';
import './App.css';
import VentanaLogueo from './components/VentanaLogue/VentanaLogueo';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { Box } from '@mui/system';
var reporte =require('./reportes/reporte.htm')

function App() {
  const [activo, setActivo] = useState(true);
  const saludo = (s:string)=>{
  const activar = ()=>{
    
  }     
  }

  return (
  <BrowserRouter >
      <div className="App">
   
      {(activo)
        ?<Dashboard />
        :<VentanaLogueo onClose={()=>saludo("hola")} selectedValue={'valor'} open={true} funcion={setActivo}/>
      }
 
    </div>
  </BrowserRouter>

  );
}

export default App;
