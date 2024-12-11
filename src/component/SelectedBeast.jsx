import { Modal, Button } from 'react-bootstrap';

function SelectedBeast({ beast, showModal, handleClose }) {
    if (!beast) return null;

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{beast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={beast.image_url} alt={beast.title} className="img-fluid" />
                <p>{beast.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectedBeast;