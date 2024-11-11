import { useState } from "react";

function HornedBeast(props) {

    const [likes, setLikes] = useState(0);
    
    const añadirLike = () => {
        setLikes(likes + 1);
    }
    return (
        <>
            <h2>{props.title}</h2>
            <img src={props.imageURL} alt={props.description} title={props.title} height="300px"/>
            <p>{props.descriptions}</p>
            <button onClick={añadirLike}>{likes} ❤️</button>
        </>
    )
}

export default HornedBeast;