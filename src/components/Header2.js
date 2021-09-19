import React, { useContext } from 'react';
import { Box, Flex, Text, IconButton, Stack, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import Menu from './Menu';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const Header = ({ page, config }) => {
    const { isOpen, onClose, onToggle } = useDisclosure();

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
                <Flex flex={{ base: 1, lg: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', lg: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    <MobileMenu onClose={onClose} isOpen={isOpen} menu={[]} />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', lg: 'start' }}>
                    <Text textAlign={useBreakpointValue({ base: 'center', lg: 'left' })} fontFamily={'heading'} color={'gray.800'}>
                        <Logo config={config} />
                    </Text>

                    <Flex display={{ base: 'none', lg: 'flex' }} alignItems="center" justifyContent="center" ml={10} flex="1">
                        <Menu menu={[]} />
                    </Flex>
                </Flex>

                <Stack flex={{ base: 1, lg: 0.3 }} justify={'flex-end'} alignItems="center" direction={'row'} spacing={3}>
                    <LoggedIn /> <LoggedOut />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Header;
