// Gallery.jsx
import { useState } from "react";
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery({ beasts, actualizarBeasts, onSelectBeast }) {
  const [searchTerm, setSearchTerm] = useState("");  // Estado para el término de búsqueda

  // Filtrar las bestias en función del término de búsqueda usando expresión regular
  const filteredBeasts = beasts.filter((beast) => {
    const regex = new RegExp(searchTerm, 'i');  // Crea la expresión regular con el término de búsqueda
    return (
      regex.test(beast.title) || regex.test(beast.keyword) // Verifica si el término de búsqueda está en el título o palabra clave
    );
  });

  return (
    <Container>
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por título o palabra clave"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado con lo que escribe el usuario
        className="form-control mb-4"
      />

      <Row xs={2} sm={3} lg={5}>
        {filteredBeasts.map(beast => (
          <Col key={beast._id}>
            <HornedBeast
              title={beast.title}
              imageURL={beast.image_url}
              descriptions={beast.description}
              onSelect={() => onSelectBeast(beast)} // Llamar a la función onSelectBeast al hacer clic
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;