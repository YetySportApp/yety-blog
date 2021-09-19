import React from 'react';
import _ from 'lodash';
import { Link, withPrefix } from '../utils';

const Logo = ({ config }) => {
    const header = _.get(config, 'header');
    const logoImage = _.get(header, 'logo_img');
    const logoImageAlt = _.get(header, 'logo_img_alt');

    return (
        <Link href={withPrefix('/')}>
            <img src={withPrefix(logoImage)} alt={logoImageAlt} />
        </Link>
    );
};
export default Logo;
