import React from 'react';
import _ from 'lodash';
import { Layout } from '../components/index';
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
                    <PostDetails post={page} data={data} />
                </Container>
            </Layout>
        );
    }
}
export default Post;
