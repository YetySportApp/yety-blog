import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light'
};

const colors = {
    primary: {
        50: '#EBF7FA',
        100: '#C7E9F0',
        200: '#A3DBE6',
        300: '#7ECCDC',
        400: '#5ABED3',
        500: '#36B0C9',
        600: '#2B8DA1',
        700: '#206A79',
        800: '#164650',
        900: '#0B2328'
    },
    secondary: {
        50: '#FEF8E7',
        100: '#FBECBB',
        200: '#F9E090',
        300: '#F6D365',
        400: '#F4C739',
        500: '#F1BB0E',
        600: '#C1960B',
        700: '#917008',
        800: '#614B05',
        900: '#302503'
    },
    brand: {
        50: '#EBF7FA',
        100: '#C7E9F0',
        200: '#A3DBE6',
        300: '#7ECCDC',
        400: '#5ABED3',
        500: '#36B0C9',
        600: '#2B8DA1',
        700: '#206A79',
        800: '#164650',
        900: '#0B2328'
    },
    facebook: {
        50: '#E8F4F9',
        100: '#D9DEE9',
        200: '#B7C2DA',
        300: '#6482C0',
        400: '#4267B2',
        500: '#385898',
        600: '#314E89',
        700: '#29487D',
        800: '#223B67',
        900: '#1E355B'
    },
    dark: '#242424'
};

const shadows = {
    outline: 'none'
};

const theme = extendTheme({
    colors,
    shadows,
    config,
    fonts: {
        heading: 'Montserrat',
        body: 'Montserrat'
    },
    styles: {
        global: (props) => ({
            body: {
                fontFamily: 'body',
                bg: mode('white', 'white')(props),
                color: mode('black', 'black')(props)
            }
        })
    }
});
export default theme;
