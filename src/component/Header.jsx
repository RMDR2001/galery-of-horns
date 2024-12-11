import { useState } from "react";

function Header() {
    const [language, setLanguage] = useState(true);

    const idioma = () => {
        setLanguage(!language);
    }

    return (
        <h1 onClick={idioma}>
            {language ? "Horned Beasts 🇬🇧" : "Bestias con Cuernos 🇪🇸"}
        </h1>
    )
}

export default Header;