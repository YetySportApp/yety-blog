import React from 'react';
import { HStack, Tag, Box, chakra, Divider, Heading, Icon } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import Router from 'next/router';
import _ from 'lodash';
import dayjs from 'dayjs';
import { htmlToReact, withPrefix, markdownify } from '../utils';
import 'dayjs/locale/it';

const PostDetails = ({ post }) => {
    const title = _.get(post, 'title');
    const subtitle = _.get(post, 'subtitle');
    const image = _.get(post, 'image');
    const imageAlt = _.get(post, 'image_alt');
    const markdownContent = _.get(post, 'markdown_content');

    return (
        <>
            <Heading as="h6" fontSize="md" fontWeight="medium" display="flex" alignItems="center" onClick={() => Router.back()} _hover={{ cursor: 'pointer' }}>
                <Icon as={FiArrowLeft} mr="10px" />
                Torna indietro
            </Heading>
            <Divider my="5" />
            <Heading color="brand.500">{title}</Heading>
            <Box d="flex" flexDirection="row" justifyContent="space-between" py={2}>
                <chakra.span color={'gray.800'} fontWeight="semibold" fontSize="small">
                    {dayjs(post.date).locale('it').format('DD MMM YYYY').toUpperCase()}
                </chakra.span>
            </Box>
            <Box d="flex" flexDirection="row">
                <HStack spacing={2}>
                    <Tag size="sm" variant="solid" colorScheme="brand" fontSize="12px">
                        Articolo
                    </Tag>
                </HStack>
            </Box>
        </>
    );
};

export default PostDetails;
