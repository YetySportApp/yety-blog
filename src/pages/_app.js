import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import '@fontsource/montserrat/latin.css';
import GlobalStyle from '../theme/GlobalStyles';
import App from 'next/app';

export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
