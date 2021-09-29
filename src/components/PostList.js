import React from 'react';
import { Box, Heading, Grid } from '@chakra-ui/react';
import PostCard from './PostCard';
import _ from 'lodash';
import { getData } from '../utils';

const PostList = ({ posts, data }) => {
    return (
        <>
            <Grid templateColumns={{ md: '1fr', lg: '1fr' }} gap={6}>
                <Grid templateColumns="repeat(1, 1fr)" gap={10}>
                    <Heading fontSize="x-large">Blog</Heading>
                    {posts.map((post, index) => {
                        const postAuthorRef = _.get(post, 'author');
                        const author = postAuthorRef ? getData(data, postAuthorRef) : null;
                        const tagsRef = _.get(post, 'tags');
                        const tags = tagsRef ? tagsRef.map((t) => getData(data, t)).filter((i, index) => index < 3) : [];
                        return <PostCard key={index} post={post} author={author} tags={tags} />;
                    })}
                </Grid>
            </Grid>
        </>
    );
};
export default PostList;
