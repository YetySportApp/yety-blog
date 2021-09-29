import React from 'react';
import _ from 'lodash';
import { Img } from '@chakra-ui/react';
import { Link, withPrefix } from '../utils';
import config from '../config/config';

const Logo = ({ config }) => {
    const header = _.get(config, 'header');
    const logoImage = _.get(header, 'logo_img');
    const logoImageAlt = _.get(header, 'logo_img_alt');
    console.log(config);
    return (
        <Link href={`${config.publicUrl}`}>
            <Img w="150px" h="50px" objectFit="contain" src={logoImage} alt={logoImageAlt} _hover={{ cursor: 'pointer' }} />
        </Link>
    );
};
export default Logo;
