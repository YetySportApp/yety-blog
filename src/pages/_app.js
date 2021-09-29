import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import '@fontsource/montserrat/latin.css';
import GlobalStyle from '../theme/GlobalStyles';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/client';

export default function MyApp({ Component, pageProps }) {
    const client = useApollo(pageProps);
    return (
        <ApolloProvider client={client}>
            <ChakraProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    );
}
