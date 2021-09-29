import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useColorModeValue, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import _ from 'lodash';
import config from '../config/config';

const MobileMenu = ({ isOpen, onClose, logged = false, menu = [] }) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Drawer placement={'right'} isOpen={isOpen} onClose={onClose} size="xs">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                    <Flex justifyContent="center" height="50px"></Flex>
                </DrawerHeader>

                <DrawerBody>
                    {menu &&
                        menu.map((menuItem, index) => {
                            const actionUrl = _.trim(_.get(menuItem, 'url'), '/');
                            return (
                                <Link href={menuItem.url} key={`${menuItem.label}_${index}`}>
                                    <Flex
                                        align="center"
                                        p="2"
                                        borderRadius="lg"
                                        role="group"
                                        cursor="pointer"
                                        color={linkColor}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor
                                        }}
                                    >
                                        {menuItem.label}
                                    </Flex>
                                </Link>
                            );
                        })}
                    {logged && (
                        <>
                            <Link href={`${config.publicUrl}/admin`}>
                                <Flex
                                    align="center"
                                    p="2"
                                    borderRadius="lg"
                                    role="group"
                                    cursor="pointer"
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor
                                    }}
                                >
                                    Pannello Amministrativo
                                </Flex>
                            </Link>
                            <Link href={`${config.publicUrl}/logout`}>
                                <Flex
                                    align="center"
                                    p="2"
                                    borderRadius="lg"
                                    role="group"
                                    cursor="pointer"
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor
                                    }}
                                >
                                    Logout
                                </Flex>
                            </Link>
                        </>
                    )}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
export default MobileMenu;
