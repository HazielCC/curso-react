// const CLIENT_ID = "i20atL0ft2RP-SZSFnkJsfueqFeglpE7aN5Of4YAs50"; // Tu Client ID de Whop
// const REDIRECT_URI = "http://localhost:5173/callback-whop"; // Cambia esto por tu URL de redirección
const CLIENT_ID = "hBdkzpN4Kzqi7lfTle-zxSrKtwFtnxDh8V7EsJ-tf8M"; // Tu Client ID de Whop
const REDIRECT_URI = "http://localhost:5173/callback-whop"; // Cambia esto por tu URL de redirección

const LoginWhop = () => {
    const handleLogin = () => {
        const authUrl = `https://whop.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        window.open(authUrl, "_self"); // Esto puede evitar bloqueos
    };


    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Iniciar sesión con Whop</h2>
            <button
                onClick={handleLogin}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px"
                }}
            >
                Autenticar con Whop
            </button>
        </div>
    );
};

export default LoginWhop;
