// SelectedBeast.jsx
import { Modal, Button, Card } from 'react-bootstrap';

function SelectedBeast({ beast, showModal, handleClose }) {
  if (!beast) {
    return null; // Si no hay bestia seleccionada, no mostrar nada
  }

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{ width: '18rem', backgroundColor: "lightgray" }}>
          <Card.Img variant="top" src={beast.image_url} />
          <Card.Body>
            <Card.Text>{beast.description}</Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;