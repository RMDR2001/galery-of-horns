import HornedBeast from './HornedBeast';

function Gallery() {
    return (
        <>
            <HornedBeast
                title={"Unicornio"}
                imageURL={"https://images.unsplash.com/photo-1574607407517-cd664b1504f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pY29ybmlvfGVufDB8fDB8fHww"}
                description={"Animal mitológico con forma de caballo y un gran cuerno en la frente"} />
            <HornedBeast 
                title={"Rinoceronte"} 
                imageURL={"https://images.unsplash.com/photo-1523629104117-bd9583d1829b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmlub2Nlcm9udGV8ZW58MHx8MHx8fDA%3D"} 
                description={"Animal mamífero muy grande que tiene un gran cuerno en la nariz"} />
        </>
    )
}

export default Gallery;