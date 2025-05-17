interface ColorInterface {
    primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
}

// Crear el objeto colors con los colores de la interfaz Palette
export const CustomPalette: ColorInterface = {
    primary: {
        main: '#1976d2',
        light: '#2196f3',
        dark: '#115293',
        contrastText: '#fff'
    },
    secondary: {
        main: '#eb2f30',
        light: '#e33371',
        dark: '#9a0036',
        contrastText: '#fff'
    }
};
