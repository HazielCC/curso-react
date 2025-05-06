export const Loading = ({message}: { message: string }) => {
    // Se puede usar un mensaje para mostrar el estado de carga
    return (
        <div>
            <h2>
                {message}
            </h2>
        </div>
    );
};