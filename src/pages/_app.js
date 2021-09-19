import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import '@fontsource/montserrat/latin.css';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
