const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

sourcebit.fetch(sourcebitConfig);

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
    const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

    const env = {
        PUBLIC_URL: isDev ? 'http://127.0.0.1:3006' : isStaging ? 'https://app-dev.yety.it' : 'https://www.yety.it',
        UPLOAD_ENDPOINT: isDev ? 'http://127.0.0.1:1337' : isStaging ? 'https://app-dev.yety.it' : 'https://www.yety.it',
        GRAPHQL_ENDPOINT: isDev ? 'http://127.0.0.1:1337/graphql' : isStaging ? 'https://app-dev.yety.it/graphql' : 'https://www.yety.it/graphql'
    };
    console.log(env);
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
