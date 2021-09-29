const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = (phase) => {
    const env = {
        PUBLIC_URL: process.env.PUBLIC_URL,
        UPLOAD_ENDPOINT: process.env.UPLOAD_ENDPOINT,
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT
    };
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
