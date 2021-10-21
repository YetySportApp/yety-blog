import React from 'react';
import Logo from './Logo';
import { Box, Flex, Container, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import _ from 'lodash';
import components from './index';
import ActionLink from './ActionLink';
import { htmlToReact } from '../utils';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="primary.500">
            {children}
        </Text>
    );
};

export default function LargeWithLogoLeft({ config }) {
    const header = _.get(config, 'header');
    const hasNav = _.get(header, 'has_nav');
    const navLinks = _.get(header, 'nav_links');
    return (
        <Box bg="dark" color={useColorModeValue('gray.600', 'white')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <Flex direction="column" justifyContent="center">
                    <Flex flex="1" justifyContent="center" mb="40px">
                        <Logo config={config} />
                    </Flex>
                    <Stack flex="1" textAlign={{ base: 'center' }} direction={{ base: 'column', md: 'row' }} justifyContent="center" spacing={4}>
                        {navLinks &&
                            navLinks.map((menuItem, index) => {
                                return (
                                    <Box key={`${menuItem.label}_${index}`}>
                                        <Box
                                            as="span"
                                            fontSize={{ base: 'md', lg: 'md', xl: 'md', '2xl': 'md' }}
                                            fontWeight={600}
                                            textAlign={{ base: 'center' }}
                                            color={'primary.500'}
                                            transition=".3s ease-in"
                                            _hover={{
                                                textDecoration: 'none',
                                                color: 'primary.500'
                                            }}
                                        >
                                            <Link href={menuItem.url || ''}>{menuItem.label}</Link>
                                        </Box>
                                    </Box>
                                );
                            })}
                    </Stack>
                    <Flex flex="1" justifyContent="center" mt="30px">
                        <Text mt="30px" fontSize="md" color="white">
                            Copyright @ 2021 Yety s.r.l.
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
