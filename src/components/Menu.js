import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { Link } from '../utils';
import _ from 'lodash';

const Menu = ({ navLinks, pageUrl }) => {
    return (
        <Stack direction={'row'} spacing={{ lg: 2, xl: 4 }}>
            {navLinks &&
                navLinks.map((menuItem, index) => {
                    const actionUrl = _.trim(_.get(menuItem, 'url'), '/');

                    return (
                        <Box key={`${menuItem.label}_${index}`}>
                            <Box
                                as="span"
                                fontSize={{ base: 'xs', lg: 'xs', xl: 'sm', '2xl': 'md' }}
                                fontWeight={600}
                                color={pageUrl === actionUrl ? 'primary.500' : 'gray.600'}
                                transition=".3s ease-in"
                                _hover={{
                                    textDecoration: 'none',
                                    color: 'primary.500'
                                }}
                            >
                                <Link href={menuItem.url}>{menuItem.label}</Link>
                            </Box>
                        </Box>
                    );
                })}
        </Stack>
    );
};
export default Menu;
