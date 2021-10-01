const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = (phase) => {
    const env = {
        PUBLIC_URL: 'https://app-dev.yety.it',
        UPLOAD_ENDPOINT: 'https://app-dev.yety.it',
        GRAPHQL_ENDPOINT: 'https://app-dev.yety.it/graphql'
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
