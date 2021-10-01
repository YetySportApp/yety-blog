import React from 'react';
import { Box, Badge, useColorModeValue, Text, HStack, Icon } from '@chakra-ui/react';
import SportIcon from './SportIcon';
import ProductCardImageCarousel from './ProductCardImageCarousel';
import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi';
import config from '../config/config';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const ProductCard = ({ data }) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            w="full"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            _hover={{ boxShadow: 'dark-lg', cursor: 'default' }}
        >
            <Box w="full" h={{ base: '200px', xl: '250px', '2xl': '250px' }} zIndex="0" pos="relative" overflow="hidden">
                <ProductCardImageCarousel gallery={[data.immagine, ...data.galleria]} />

                <Box pos="absolute" zIndex="1" top="5px" left="5px">
                    <Badge
                        bg="primary.500"
                        borderRadius="md"
                        textTransform="capitalize"
                        textShadow="-1px -1px 0px rgba(0,0,0,0.3)"
                        color="white"
                        fontSize="xs"
                        borderWidth="1px"
                        borderColor="primary.400"
                        py="5px"
                        boxShadow="dark-lg"
                        pr="15px"
                        pl="15px"
                    >
                        Esperienza
                    </Badge>
                </Box>
            </Box>

            <Box p="3">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    <Text textTransform="capitalize">
                        <Link href={`${config.publicUrl}/${data.tipo}/${data.slug}/${data.id}`}>{data.nome}</Link>
                    </Text>
                </Box>

                <Box d="flex" py={1} alignItems="center">
                    {data.address.region && data.address.province && data.address.city && (
                        <>
                            <Icon as={FiMapPin} color="brand.500" w={'14px'} h={'14px'} />
                            <Text ml="5px" color="gray.400">
                                {data.address.region}, {data.address.province.replace('Città Metropolitana di', 'Provincia di')}, {data.address.city}
                            </Text>
                        </>
                    )}
                </Box>
                <Box d="flex" py={1} alignItems="center">
                    <Box w={'14px'} h={'14px'}>
                        <Icon as={SportIcon} />
                    </Box>
                    <Text ml="5px" color="brand.400">
                        {data.sports && data.sports.length > 0 ? data.sports.map((x) => x.nome).join(', ') : null}
                    </Text>
                </Box>

                <Box d="flex" alignItems="baseline" minH="25px">
                    {data.tags && data.tags.length > 0 && (
                        <HStack spacing="10px" maxW="100%" overflow="hidden">
                            {data.tags
                                .filter((x, i) => i < 3)
                                .map((tag, index) => {
                                    return (
                                        <Badge
                                            key={`${tag.nome}_${index}`}
                                            rounded="md"
                                            px="2"
                                            py="1"
                                            borderColor="primary.500"
                                            borderWidth="1px"
                                            color="primary.500"
                                            bg="primary.50"
                                            fontSize="x-small"
                                            shadow="lg"
                                            _hover={{ cursor: 'pointer' }}
                                        >
                                            {tag.nome}
                                        </Badge>
                                    );
                                })}
                        </HStack>
                    )}
                </Box>

                <Box d="flex" minH="45px" justifyContent="flex-end" alignItems="center">
                    {data.costo > 0 ? (
                        <>
                            <Text fontSize="xs" fontWeight="500" mr="10px">
                                A partire da:
                            </Text>
                            <Box as="span" mr="5px" color="primary.400" fontWeight="600" fontSize="large">
                                € {data.costo}
                            </Box>
                        </>
                    ) : null}
                </Box>

                <Box d="flex" mt="2" justifyContent="start">
                    <Text fontSize="sm" fontWeight="600" color="primary.500">
                        <Link href={`${config.publicUrl}/${data.tipo}/${data.slug}/${data.id}`}>
                            <Box _hover={{ cursor: 'pointer' }}>Dettagli</Box>
                        </Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductCard;
