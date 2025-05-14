// import {create} from "zustand/react";
//
// export interface TokenData {
//     code: string | null; // Código de autorización
//     expiresIn?: string;
//     refreshToken?: string;
//     response?: any; // Respuesta de la API
//
//     setCode: (code: string | null) => void; // Definir el tipo de la función aquí
//     handleCallback: () => Promise<void>; // Función para manejar el callback
// }
//
// const CLIENT_ID = "hBdkzpN4Kzqi7lfTle-zxSrKtwFtnxDh8V7EsJ-tf8M"; // Tu Client ID de Whop
// const CLIENT_SECRET = "poW-ZC84n5Kljvd85JT2ifqgv-D1eeklAw82sgw0OO0"; // Tu Client ID de Whop
// const REDIRECT_URI = "http://localhost:5173/callback-whop"; // Cambia esto por tu URL de redirección
//
// export const UseOAuthWhop = create<TokenData>()((set) => ({
//     code: null,
//     expiresIn: undefined,
//     refreshToken: undefined,
//
//     setCode: (code) => set({code}), // Función que actualiza el código
//     handleCallback: async () => {
//         // Get the authorization code from URL parameters
//         const code = UseOAuthWhop.getState().code;
//         console.log(code);
//         if (code) {
//             // Get user information using the token
//             const response = await fetch('https://api.whop.com/api/v2/me', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${code}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//
//             if (!response.ok) {
//                 throw new Error('Failed to fetch user data');
//             }
//
//             const userData = await response.json();
//             console.log('User Information:', userData);
//             set({response: userData});
//         } else {
//             console.error('No code received');
//             set({response: null});
//         }
//     },
//
//     // setAccessToken: (accessToken: string) => set({accessToken}),
//     // setExpiresIn: (expiresIn?: string) => set({expiresIn}),
//     // setRefreshToken: (refreshToken?: string) => set({refreshToken}),
// }));
//
