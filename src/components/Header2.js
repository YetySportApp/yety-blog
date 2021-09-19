import React from 'react';
import { Box, Flex, Text, IconButton, Stack, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import Menu from './Menu';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import _ from 'lodash';
import { FiMenu } from 'react-icons/fi';
import { getPageUrl } from '../utils';

const Header = ({ page, config }) => {
    const { isOpen, onClose, onToggle } = useDisclosure();
    const configTitle = _.get(config, 'title');
    const header = _.get(config, 'header');
    const hasNav = _.get(header, 'has_nav');
    const navLinks = _.get(header, 'nav_links');
    const logoImage = _.get(header, 'logo_img');
    const logoImageAlt = _.get(header, 'logo_img_alt');
    const pageTemplate = _.get(page, 'template');
    const pageUrl = _.trim(getPageUrl(page), '/');
    console.log(navLinks, hasNav);

    return (
        <Box pos="sticky" top="0" zIndex={1000} shadow="small">
            <Flex
                bg={'white'}
                color={'gray.600'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={'gray.200'}
                align={'center'}
            >
                <Flex flex={{ base: 1 }} justify={{ base: 'start', lg: 'start' }}>
                    <Text textAlign={useBreakpointValue({ base: 'center', lg: 'left' })} fontFamily={'heading'} color={'gray.800'}>
                        <Logo config={config} />
                    </Text>

                    <Flex display={{ base: 'none', lg: 'flex' }} alignItems="center" justifyContent="center" ml={10} flex="1">
                        {hasNav && !_.isEmpty(navLinks) && <Menu navLinks={navLinks} pageUrl={pageUrl} />}
                    </Flex>
                </Flex>

                <Stack flex={{ base: 1, lg: 0.3 }} justify={'flex-end'} alignItems="center" direction={'row'} spacing={3}>
                    <LoggedIn /> <LoggedOut />
                </Stack>
                <Flex flex={{ base: 1, lg: 'auto' }} justifyContent="flex-end" ml={{ base: -2 }} display={{ base: 'flex', lg: 'none' }}>
                    <IconButton
                        color="gray.900"
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <FiMenu />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    <MobileMenu onClose={onClose} isOpen={isOpen} menu={[]} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
