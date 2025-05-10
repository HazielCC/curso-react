// import {TokenData, UseOAuthWhop} from "../../zustand/stores/UseOAuthWhop.tsx";
// // import {WhopAPI} from "@whop-apps/sdk";
//
//
// export const CallBackView = () => {
//     const code = UseOAuthWhop.getState().code;
//     const handleCallback = UseOAuthWhop((state: TokenData) => state.handleCallback);
//
//     console.log(code);
//
//     // Llama a la función para manejar el callback
//     if (code) {
//         handleCallback().catch((error) => {
//             console.error("Error al manejar el callback:", error);
//         });
//     }
//
//
//     return (
//         <div>
//             <h1>No se encontraron tokens, la autenticación falló</h1>
//         </div>
//     );
// };
