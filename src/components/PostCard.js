import React from 'react';
import dayjs from 'dayjs';
import { Box, Link, chakra, HStack, Tag, Flex, Image } from '@chakra-ui/react';
import 'dayjs/locale/it';
import { getData, getPageUrl } from '../utils';

const PostCard = ({ post, author, tags }) => {
    const postUrl = getPageUrl(post, { withPrefix: true });

    return (
        <Box bg={'white'} display={{ md: 'flex' }} maxW={{ lg: '5xl' }} shadow="md" rounded={{ lg: 'lg' }}>
            <Box w={{ md: '50%' }}>
                <Link href={postUrl}>
                    <Box
                        h={{ base: 64, md: 'full' }}
                        borderTopLeftRadius="lg"
                        borderTopRightRadius={{ base: 'lg', md: 'none' }}
                        borderBottomLeftRadius={{ base: 'none', md: 'lg' }}
                        bgSize="cover"
                        style={{
                            backgroundImage: `url(/${post.thumb_image})`
                        }}
                    ></Box>
                </Link>
            </Box>

            <Box pt={{ md: 12, base: 6 }} pb={6} px={6} maxW={{ base: 'xl', md: '5xl' }} w={{ md: '50%' }}>
                <chakra.h2 fontSize={{ base: 'large', md: 'x-large' }} color={'brand.500'} fontWeight="bold">
                    {post.title}
                </chakra.h2>
                <Box d="flex" flexDirection="row" justifyContent="space-between" py={2}>
                    <chakra.span color={'gray.800'} fontWeight="semibold" fontSize="small">
                        {dayjs(post.date).locale('it').format('DD MMM YYYY').toUpperCase()}
                    </chakra.span>
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
                <chakra.p mt={4} color={'gray.600'}>
                    {post.excerpt}
                </chakra.p>

                <Flex alignItems="center" flexDirection={'column'} pt="2">
                    <Box flex={1} d="flex" alignItems="center" alignSelf={'start'}>
                        <Image h={10} fit="cover" rounded="full" src={`/${author.photo}`} alt="Avatar" />
                        <Link mx={2} fontWeight="semibold" color={'gray.600'}>
                            {author.first_name} {author.last_name}
                        </Link>
                    </Box>
                    <Box display="flex" mt={{ base: 3, md: 1 }} justifyContent="flex-end" flexDirection="row" alignSelf={'end'}>
                        <Link href={postUrl} color="brand.500" fontWeight="semibold" fontSize="md" rounded="lg">
                            Continua a leggere
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
export default PostCard;
