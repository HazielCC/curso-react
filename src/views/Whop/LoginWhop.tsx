// import React from "react";
// import {Link} from "react-router-dom";
// import {paths} from "../../routes/paths.tsx";
// import {UseOAuthWhop} from "../../zustand/stores/UseOAuthWhop.tsx";
// // const CLIENT_ID = "i20atL0ft2RP-SZSFnkJsfueqFeglpE7aN5Of4YAs50"; // Tu Client ID de Whop
// // const REDIRECT_URI = "http://localhost:5173/callback-whop"; // Cambia esto por tu URL de redirección
// const CLIENT_ID = "hBdkzpN4Kzqi7lfTle-zxSrKtwFtnxDh8V7EsJ-tf8M"; // Tu Client ID de Whop
// const REDIRECT_URI = "http://localhost:5173/callback-whop"; // Cambia esto por tu URL de redirección
//
//
// const LoginWhop: React.FC = () => {
//     const code = UseOAuthWhop.getState().code;
//
//     console.log(code);
//     const handleLogin = () => {
//         // const state = generateRandomString(); // Add a function to generate random string
//         const encodedRedirectUri = encodeURIComponent(REDIRECT_URI);
//         // const authUrl = `https://whop.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodedRedirectUri}&response_type=code&state=${state}`;
//         const authUrl = `https://whop.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodedRedirectUri}&response_type=code`;
//         window.location.href = authUrl;
//     };
//
//     return (
//         <div style={{textAlign: "center", marginTop: "50px"}}>
//             <h2>Iniciar sesión con Whop</h2>
//             <button
//                 onClick={handleLogin}
//                 style={{
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     cursor: "pointer",
//                     backgroundColor: "#4CAF50",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "5px"
//                 }}
//             >
//                 Autenticar con Whop
//             </button>
//             <br/>
//             <br/>
//             <button>
//                 <Link to={paths.callBackView}>Ejemplo inicio de sesión Whop</Link>
//             </button>
//         </div>
//     );
// };
//
// export default LoginWhop;
