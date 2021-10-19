import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Helmet } from 'react-helmet';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        // see https://github.com/nfl/react-helmet#server-usage for more information
        // 'head' was occupied by 'renderPage().head', we cannot use it
        return { ...initialProps, helmet: Helmet.renderStatic(), url: ctx.req.url || '' };
    }

    // should render on <html>
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }

    // should render on <body>
    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }

    // should render on <head>
    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
            .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            .map((el) => this.props.helmet[el].toComponent());
    }

    render() {
        // if you don't like Helmet but you still want to set properties on body use this
        // const pageProps = _.get(this.props, '__NEXT_DATA__.props.pageProps');

        return (
            <Html {...this.helmetHtmlAttrComponents}>
                <Head>
                    {this.helmetHeadComponents}
                    <link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />
                    <link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:url" content={`${this.props.url}`} />
                    <meta property="og:type" content="article" />
                </Head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <script src="/js/plugins.js" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
