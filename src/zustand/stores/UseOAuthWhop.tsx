import {create} from "zustand/react";

export interface TokenData {
    code: string | null; // Código de autorización
    expiresIn?: string;
    refreshToken?: string;

    setCode: (code: string | null) => void; // Definir el tipo de la función aquí
}

const CLIENT_ID = "hBdkzpN4Kzqi7lfTle-zxSrKtwFtnxDh8V7EsJ-tf8M"; // Tu Client ID de Whop
const CLIENT_SECRET = "poW-ZC84n5Kljvd85JT2ifqgv-D1eeklAw82sgw0OO0"; // Tu Client ID de Whop
const REDIRECT_URI = "http://localhost:5173/callback-whop"; // Cambia esto por tu URL de redirección

export const UseOAuthWhop = create<TokenData>()((set) => ({
    code: null,
    expiresIn: undefined,
    refreshToken: undefined,

    setCode: (code) => set({code}), // Función que actualiza el código


    // setAccessToken: (accessToken: string) => set({accessToken}),
    // setExpiresIn: (expiresIn?: string) => set({expiresIn}),
    // setRefreshToken: (refreshToken?: string) => set({refreshToken}),
}));

