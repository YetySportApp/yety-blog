import React from 'react';
import Logo from './Logo';
import { Box, Container, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
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
    const footer = _.get(config, 'footer');

    return (
        <Box bg="dark" color={useColorModeValue('gray.600', 'white')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo config={config} />
                        </Box>
                        <Text fontSize={'sm'}>© 2020 Yety s.r.l.</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Product</ListHeader>
                        <Link href={'#'}>Overview</Link>
                        <Link href={'#'}>Features</Link>
                        <Link href={'#'}>Tutorials</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Releases</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact</Link>
                        <Link href={'#'}>Partners</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Legal</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

// export default class Footer extends React.Component {
//     render() {
//         const config = _.get(this.props, 'config');
//         const footer = _.get(config, 'footer');
//         const footerSections = _.get(footer, 'sections');
//         const hasNav = _.get(footer, 'has_nav');
//         const navLinks = _.get(footer, 'nav_links');
//         const footerContent = _.get(footer, 'content');
//         const links = _.get(footer, 'links');

//         return (
//             <footer id="colophon" className="site-footer">
//                 {footerSections && !_.isEmpty(footerSections) && (
//                     <div className="footer-top outer">
//                         <div className="inner">
//                             <div className="grid footer-widgets">
//                                 {_.map(footerSections, (section, sectionIdx) => {
//                                     const sectionType = _.get(section, 'type');
//                                     const component = _.upperFirst(_.camelCase(sectionType));
//                                     if (!component) {
//                                         throw new Error(`footer section does not have the 'type' property`);
//                                     }
//                                     const Component = components[component];
//                                     if (!Component) {
//                                         throw new Error(`no component matching the footer section's type: ${sectionType}`);
//                                     }
//                                     return <Component key={sectionIdx} section={section} />;
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 <div className="footer-bottom outer">
//                     <div className="inner">
//                         {hasNav && navLinks && (
//                             <div className="footer-nav">
//                                 <ul className="menu">
//                                     {_.map(navLinks, (action, actionIdx) => (
//                                         <li key={actionIdx} className="menu-item">
//                                             <ActionLink action={action} />
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                         <div className="site-info">
//                             {htmlToReact(footerContent)}
//                             &nbsp;
//                             {_.map(links, (action, actionIdx) => (
//                                 <ActionLink key={actionIdx} action={action} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         );
//     }
// }
