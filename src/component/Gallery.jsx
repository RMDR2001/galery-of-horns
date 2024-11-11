import HornedBeast from './HornedBeast';
import data from '../data.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Gallery() {
    return (
        <>
            <Container>
                <Row xs={2} sm={3} lg={5}>
                    {
                        data.map(beast => (
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
    )
}

export default Gallery;