const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

sourcebit.fetch(sourcebitConfig);

module.exports = (phase) => {
    const env = {
        PUBLIC_URL: process.env.PUBLIC_URL || 'http://localhost:3006',
        UPLOAD_ENDPOINT: process.env.UPLOAD_ENDPOINT || 'http://localhost:1337',
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || 'http://localhost:1337/graphql'
    };
    console.log('ENV', env);
    return {
        env,
        publicRuntimeConfig: env,
        trailingSlash: true,
        devIndicators: {
            autoPrerender: false
        },
        webpack: (config, { webpack }) => {
            // Tell webpack to ignore watching content files in the content folder.
            // Otherwise webpack receompiles the app and refreshes the whole page.
            // Instead, the src/pages/[...slug].js uses the "withRemoteDataUpdates"
            // function to update the content on the page without refreshing the
            // whole page
            config.plugins.push(new webpack.WatchIgnorePlugin([[/\/content\//]]));
            return config;
        }
    };
};
