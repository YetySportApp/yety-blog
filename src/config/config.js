import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const config = {
    graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
    uploadsEndpoint: process.env.UPLOAD_ENDPOINT,
    publicUrl: process.env.PUBLIC_URL
};
export default config;
