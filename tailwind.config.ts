import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // analiza todos los archivos en src/
    ],
    theme: {
        extend: {
        colors: {
            primary: '#B30000', // ejemplo: color institucional
            dark: '#111',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'], // o la que tú uses
        },
        },
    },
    plugins: [],
};

export default config;
