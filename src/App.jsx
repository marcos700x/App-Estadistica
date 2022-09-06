import './App.css';
import Footer from './components/Footer';

import Histograma from './components/Histograma';
import InfoDatos from './components/InfoDatos';
import Input from './components/Input';
import PoligonoFrecuencias from './components/PoligonoFrecuencias';
import TablaFrecuencias from './components/TablaFrecuencias';
import { DataProvider } from './Context/DataContext';

function App() {


  return (
    <div className="App">
      <DataProvider>
        <div className="container">
          <h1 className='pt-4 mb-4 display-4'>Calculadora de datos agrupados</h1>
          <Input/>
          <InfoDatos/>
          <TablaFrecuencias/>
          <Histograma />
          <PoligonoFrecuencias/>
        </div>
          <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
