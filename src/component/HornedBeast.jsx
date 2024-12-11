import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast({ title, imageURL, descriptions, onSelect }) {
  const [likes, setLikes] = useState(0);

  const añadirLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Card style={{ width: '18rem', backgroundColor: "lightgray", margin: "10px 10px" }} onClick={onSelect}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{descriptions}</Card.Text>
        <Button variant="primary" onClick={añadirLike}>{likes} ❤️</Button>
      </Card.Body>
    </Card>
  );
}

export default HornedBeast;