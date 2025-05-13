import {useParams} from "react-router-dom";

export const ResultsView = () => {
    const title = useParams()
    console.log(title);

    return (
        <>hola</>
    );
};