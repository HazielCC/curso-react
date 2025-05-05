import {Link} from "react-router-dom";

export const PokemonSeeDetailsButton = ({name, url}: { name: string, url: string }) => {
    console.log(name, url);
    // Se obtiene el ID del pokemon de la url
    const getIdFromUrl = (url: string) => {
        const urlParts = url.split("/");
        const id = urlParts[urlParts.length - 2];
        console.log(id);
        return id;
    }
    
    return (
        <>
            <h3>{name}</h3>
            <button>
                <Link to={`/pokemon-detail/${getIdFromUrl(url)}`}> ver detalles </Link>
                {/*<a href={url}> ver detalles </a>*/}
            </button>
        </>
    );
};