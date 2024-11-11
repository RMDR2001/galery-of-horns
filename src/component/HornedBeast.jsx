import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {

    const [likes, setLikes] = useState(0);

    const añadirLike = () => {
        setLikes(likes + 1);
    }
    return (
        <>
            <Card style={{ width: '18rem', backgroundColor: "lightgray", margin: "10px 10px" }}>
                <Card.Img variant="top" src={props.imageURL} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.descriptions}
                    </Card.Text>
                    <Button variant="primary" onClick={añadirLike}>{likes} ❤️</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default HornedBeast;