interface TypographyInterface {
    fontFamily: string;
    h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        padding: string;
    };
    h3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        padding: string;
    };
    h4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        padding: string;
    };
    body1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    body2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
}

export const CustomTypography: TypographyInterface = {
    fontFamily: ['Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'].join(','),
    h1: {
        fontSize: '1.75rem',
        fontWeight: 700,
        lineHeight: 1.5,
    },
    h2: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
        padding: '0.5rem 0',
    },
    h3: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.3,
        padding: '0.5rem 0',
    },
    h4: {
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: 1.2,
        padding: '0.5rem 0',
    },
    body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.4,
    },

}