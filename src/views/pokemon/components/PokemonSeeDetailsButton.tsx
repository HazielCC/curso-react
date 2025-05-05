export const PokemonSeeDetailsButton = ({name, url}: { name: string, url: string }) => {
    return (
        <>
            <h3>{name}</h3>
            <button>
                <a href={url}> ver detalles
                </a>
            </button>
        </>
    );
};