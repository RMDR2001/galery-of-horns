// App.jsx
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'; // Importar el componente SelectedBeast
import data from './data.json';

function App() {
  const [beastsData, setBeastsData] = useState(data);  // Estado para almacenar los datos
  const [selectedBeast, setSelectedBeast] = useState(null); // Estado para la bestia seleccionada
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para actualizar el estado de las bestias
  const actualizarBeastsData = (nuevoDato) => {
    setBeastsData(nuevoDato);
  };

  // Función para seleccionar una bestia
  const handleSelectBeast = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true); // Mostrar el modal cuando se seleccione una bestia
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Gallery 
          beasts={beastsData} 
          actualizarBeasts={actualizarBeastsData} 
          onSelectBeast={handleSelectBeast} // Pasar la función para seleccionar bestias
        />
        <SelectedBeast 
          beast={selectedBeast} 
          showModal={showModal} 
          handleClose={handleCloseModal} // Pasar las funciones de control del modal
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;