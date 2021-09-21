import React, { useState, useEffect } from 'react';
import { HStack, Tag, Box, chakra, Divider, Heading, Icon, Image, Link, VStack, Flex, Avatar } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import Router from 'next/router';
import _ from 'lodash';
import dayjs from 'dayjs';
import { withPrefix, getData } from '../utils';
import 'dayjs/locale/it';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import marked from 'marked';
import htmlToChakra from '../utils/htmlToChakra';

const PostDetails = ({ post, data }) => {
    const [url, setUrl] = useState('');
    const title = _.get(post, 'title');
    const subtitle = _.get(post, 'subtitle');
    const image = _.get(post, 'image');
    const imageAlt = _.get(post, 'image_alt');
    const markdownContent = _.get(post, 'markdown_content');
    const tagsRef = _.get(post, 'tags');
    const tags = tagsRef ? tagsRef.map((t) => getData(data, t)) : [];
    const postAuthorRef = _.get(post, 'author');
    const author = postAuthorRef ? getData(data, postAuthorRef) : null;
    console.log(author);
    useEffect(() => {
        if (Router.query && window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, [Router]);

    return (
        <>
            <Heading as="h6" fontSize="md" fontWeight="medium" display="flex" alignItems="center" onClick={() => Router.back()} _hover={{ cursor: 'pointer' }}>
                <Icon as={FiArrowLeft} mr="10px" />
                Torna indietro
            </Heading>
            <Divider my="5" />
            <Heading color="brand.500" p={5}>
                {title}
            </Heading>
            {subtitle && (
                <Heading as={'h5'} fontSize="large" px={5} color="gray.500">
                    {subtitle}
                </Heading>
            )}
            <Box px={5} d="flex" flexDirection="row" justifyContent="space-between" py={2}>
                <chakra.span color={'gray.800'} fontWeight="semibold" fontSize="small">
                    {dayjs(post.date).locale('it').format('DD MMM YYYY').toUpperCase()}
                </chakra.span>
            </Box>
            <Box px={5} d="flex" flexDirection="row">
                <HStack spacing={2}>
                    {tags &&
                        tags.length > 0 &&
                        tags.map((tag) => (
                            <Tag key={tag.ID} size="sm" variant="solid" colorScheme="brand" fontSize="12px">
                                {tag.title}
                            </Tag>
                        ))}
                </HStack>
            </Box>
            {image && (
                <Box p={5}>
                    <img src={withPrefix(image)} alt={imageAlt} style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }} />
                </Box>
            )}
            {markdownContent && <Box p={5}>{htmlToChakra(marked(markdownContent))}</Box>}
            <Divider my="5" />
            <Flex alignItems="center" pb="10">
                <Box px={5} flex={1} d="flex" alignItems="center">
                    <Avatar size="lg" src={`${author.photo}`} alt={`${author.first_name}`} />
                    <VStack ml="10px" justifyItems="start" textAlign="start">
                        <Heading fontWeight="semibold" fontSize="medium" color={'gray.400'}>
                            Autore
                        </Heading>
                        <Link mx={2} fontWeight="semibold" fontSize="large" color={'gray.600'}>
                            {author.first_name} {author.last_name}
                        </Link>
                    </VStack>
                </Box>
                <HStack spacing={3}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
                        <Icon aria-label="Convidi su Facebook" title="Condividi su Facebook" as={GrFacebook} _hover={{ cursor: 'pointer' }} />
                    </a>
                    <a href={`http://twitter.com/share?url=${url}&hashtags=${tags.map((t) => t.title).join(',')}`} target="_blank">
                        <Icon aria-label="Convidi su Twitter" title="Condividi su Twitter" as={GrTwitter} _hover={{ cursor: 'pointer' }} />
                    </a>
                </HStack>
            </Flex>
        </>
    );
};

export default PostDetails;
