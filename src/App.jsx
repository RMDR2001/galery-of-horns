import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import Gallery from './component/Gallery';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
import data from './data.json';

function App() {
  const [beastsData, setBeastsData] = useState(data);
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const actualizarBeastsData = (nuevoDato) => {
    setBeastsData(nuevoDato);
  };

  const handleSelectBeast = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

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
          onSelectBeast={handleSelectBeast}
        />
        <SelectedBeast 
          beast={selectedBeast} 
          showModal={showModal} 
          handleClose={handleCloseModal}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;