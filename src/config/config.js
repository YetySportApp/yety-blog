import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const config = {
    graphqlEndpoint: publicRuntimeConfig.GRAPHQL_ENDPOINT,
    uploadsEndpoint: publicRuntimeConfig.UPLOAD_ENDPOINT,
    publicUrl: publicRuntimeConfig.PUBLIC_URL
};
export default config;
