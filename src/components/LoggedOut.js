import React from 'react';
import { Button } from '@chakra-ui/react';
import config from '../config/config';

const LoggedOut = () => {
    return (
        <>
            <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={{ base: 'xs', lg: 'xs', xl: 'sm', '2xl': 'md' }}
                fontWeight={400}
                padding={'5px 10px'}
                color={'white'}
                borderRadius={'3px'}
                bg={'primary.500'}
                _hover={{
                    bg: 'primary.400'
                }}
                onClick={() => (window.location.href = `${config.publicUrl}/login`)}
            >
                Accedi
            </Button>
            <Button
                as={'a'}
                fontSize={{ base: 'xs', lg: 'xs', xl: 'sm', '2xl': 'md' }}
                fontWeight={400}
                variant={'link'}
                color={'#2C2C2'}
                onClick={() => (window.location.href = `${config.publicUrl}/register`)}
                _hover={{
                    textTransform: 'none',
                    cursor: 'pointer',
                    color: 'brand.500'
                }}
            >
                Registrati
            </Button>
        </>
    );
};
export default LoggedOut;
