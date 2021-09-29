const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

sourcebit.fetch(sourcebitConfig);

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    const isProd = phase === PHASE_PRODUCTION_BUILD;
    const isStaging = process.env.STAGING === 1;

    const env = {
        PUBLIC_URL: process.env.PUBLIC_URL,
        UPLOAD_ENDPOINT: process.env.UPLOAD_ENDPOINT,
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT
    };

    console.log(` process.env.PUBLIC_URL ${process.env.PUBLIC_URL}`);

    return {
        env,
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
