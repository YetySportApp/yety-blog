import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';
import BlogPostFooter from '../components/BlogPostFooter';
import Router from 'next/router';
import { Container } from '@chakra-ui/react';
import PostDetails from '../components/PostDetails';
class Post extends React.Component {
    render() {
        const page = _.get(this.props, 'page');
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');

        return (
            <Layout page={page} config={config}>
                <Container maxW="container.xl" h="auto" minH="100vh" p={8}>
                    <PostDetails post={page} />
                    {/* <button onClick={() => Router.back()}>as</button>
                    <div className="outer">
                        <div className="inner-medium">
                            <article className="post post-full">
                                <header className="post-header">
                                    <h1 className="post-title">{title}</h1>
                                    {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                                </header>
                                {image && (
                                    <div className="post-image">
                                        <img src={withPrefix(image)} alt={imageAlt} />
                                    </div>
                                )}
                                {markdownContent && <div className="post-content">{markdownify(markdownContent)}</div>}
                                <BlogPostFooter post={page} dateType={'long'} data={data} />
                            </article>
                        </div>
                    </div> */}
                </Container>
            </Layout>
        );
    }
}
export default Post;
