import React from 'react';
import _ from 'lodash';

import { Layout } from '../components';
import { Link, getPageUrl, withPrefix } from '../utils';
import BlogPostFooter from '../components/BlogPostFooter';
import { Container } from '@chakra-ui/react';
import PostList from '../components/PostList';

export default class Blog extends React.Component {
    render() {
        const page = _.get(this.props, 'page');
        const data = _.get(this.props, 'data');
        const config = _.get(this.props, 'data.config');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <Container maxW="container.xl" h="auto" minH="100vh" p={8}>
                    <PostList posts={posts} data={data} />
                </Container>
            </Layout>
        );
    }
}
