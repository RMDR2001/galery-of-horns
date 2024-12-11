import { useState } from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Gallery() {
    // Estado para almacenar el número de cuernos seleccionado
    const [hornsFilter, setHornsFilter] = useState('All');

    // Función para manejar el cambio del filtro
    const handleFilterChange = (event) => {
        setHornsFilter(event.target.value);
    };

    // Filtrar los datos según el número de cuernos seleccionado
    const filteredData = hornsFilter === 'All'
        ? data
        : data.filter(beast => beast.horns === parseInt(hornsFilter));

    return (
        <>
            {/* Menú desplegable para filtrar por número de cuernos */}
            <Form>
                <Form.Group controlId="hornsFilter">
                    <Form.Label>Filtrar por número de cuernos</Form.Label>
                    <Form.Control as="select" onChange={handleFilterChange} value={hornsFilter}>
                        <option value="All">Todos</option>
                        <option value="1">1 Cuerno</option>
                        <option value="2">2 Cuernos</option>
                        <option value="3">3 Cuernos</option>
                        <option value="100">100 Cuernos</option>
                    </Form.Control>
                </Form.Group>
            </Form>

            <Container>
                <Row xs={2} sm={3} lg={5}>
                    {
                        filteredData.map(beast => (
                            <HornedBeast
                                key={beast._id}
                                title={beast.title}
                                imageURL={beast.image_url}
                                descriptions={beast.description} />
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Gallery;