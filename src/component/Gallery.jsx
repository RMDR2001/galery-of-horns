// Gallery.jsx
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery({ beasts, actualizarBeasts, onSelectBeast }) {

  return (
    <Container>
      <Row xs={2} sm={3} lg={5}>
        {beasts.map(beast => (
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