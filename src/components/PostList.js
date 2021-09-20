import React from 'react';
import { Box, Heading, Grid } from '@chakra-ui/react';
import PostCard from './PostCard';
import _ from 'lodash';
import { getData } from '../utils';

const PostList = ({ posts, data }) => {
    return (
        <>
            <Grid templateColumns={{ md: '1fr', lg: '1fr 0.3fr' }} gap={6}>
                <Grid templateColumns="repeat(1, 1fr)" gap={10}>
                    <Heading fontSize="x-large">Blog</Heading>
                    {posts.map((post, index) => {
                        const postAuthorRef = _.get(post, 'author');
                        const author = postAuthorRef ? getData(data, postAuthorRef) : null;
                        return <PostCard key={index} post={post} author={author} />;
                    })}
                </Grid>

                <Box w="100%" h="10" bg="white.500" />
            </Grid>
        </>
    );
};
export default PostList;
