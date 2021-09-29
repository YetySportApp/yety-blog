import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { ME } from '../graphql/queries/me';
import { Box, Text, Menu, Avatar, MenuButton, MenuList, MenuItem, VStack, HStack } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import config from '../config/config';

const LoggedIn = ({ callback }) => {
    const [me, { data }] = useLazyQuery(ME, { fetchPolicy: 'network-only' });
    useEffect(() => me(), []);

    return data && data.me ? (
        <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack alignContent="center">
                    <VStack display={{ base: 'none', md: 'flex' }} alignItems="center" spacing="1px" ml="2">
                        <Text fontSize={{ base: 'xs', lg: 'xs', xl: 'sm', '2xl': 'md' }} color={'black'}>
                            {data.me.nome} {data.me.cognome}
                        </Text>
                    </VStack>
                    <Avatar size={'sm'} src={`${config.uploadsEndpoint}${data.me.foto.url}`} />

                    <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown color={'white'} bg="red" />
                    </Box>
                </HStack>
            </MenuButton>
            <MenuList bg={'white'} borderColor={'gray.200'} boxShadow="dark-lg">
                <MenuItem onClick={() => (window.location.href = `${config.publicUrl}/profilo/modifica`)}>Profilo</MenuItem>
                {data.me.role && data.me.role.type && data.me.role.type.indexOf('manager') !== -1 && (
                    <MenuItem onClick={() => (window.location.href = `${config.publicUrl}/admin`)}>Pannello Amministrativo</MenuItem>
                )}
                <MenuItem onClick={() => (window.location.href = `${config.publicUrl}/logout`)}>Logout</MenuItem>
            </MenuList>
        </Menu>
    ) : null;
};
export default LoggedIn;
