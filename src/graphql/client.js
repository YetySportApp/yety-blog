import { useMemo } from 'react';
import merge from 'deepmerge';
import Cookie from 'universal-cookie';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-unfetch';
import config from '../config/config';

export const APOLLO_STATE_PROPERTY_NAME = '__APOLLO_STATE__';

const getToken = (req) => {
    let cookie = new Cookie();
    if (req && req.headers && req.headers.cookie) {
        cookie = new Cookie(req.headers.cookie);
    }
    const token = cookie.get('hyety_jwt');
    return token;
};

let apolloClient = null;

const createApolloClient = (ctx) => {
    const httpLink = new HttpLink({
        uri: config.graphqlEndpoint,
        fetch
    });

    const authLink = setContext((_, { headers }) => {
        // Get the authentication token from cookies
        const token = getToken(ctx?.req);

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ''
            }
        };
    });

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
};

export function initializeApollo(initialState = null, ctx = null) {
    const client = apolloClient ?? createApolloClient(ctx);

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = client.extract();

        // Merge the existing cache into data passed from
        // getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache);

        // Restore the cache with the merged data
        client.cache.restore(data);
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') {
        return client;
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = client;
    }

    return client;
}

export function addApolloState(client, pageProps) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
    }

    return pageProps;
}

export function useApollo(pageProps) {
    const state = pageProps[APOLLO_STATE_PROPERTY_NAME];
    const store = useMemo(() => initializeApollo(state), [state]);

    return store;
}
