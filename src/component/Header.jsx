import { useState } from "react";

function Header() {

    const [language, setLanguage] = useState(true);

    const idioma = () => {
        if (language) {
            setLanguage(false);
        } else {
            setLanguage(true);
        }
    }

    return (
        <h1 onClick={idioma}>{
            language ? "Horned Beasts" : "Beastias con Cuernos"
        }</h1>
    )
}

export default Header;