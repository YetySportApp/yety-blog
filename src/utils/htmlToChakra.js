import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Heading, Link, chakra, Box, Image } from '@chakra-ui/react';

const htmlToChakra = (html) => {
    if (!html) {
        return null;
    }
    return ReactHtmlParser(html, {
        transform: (node, index) => {
            if (node.type === 'tag') {
                switch (node.name) {
                    case 'h1':
                        return (
                            <Heading as={`${node.name}`} size="xl" py={4} color="brand.500">
                                {node.children[0].data}
                            </Heading>
                        );
                    case 'h2':
                        return (
                            <Heading as={`${node.name}`} size="lg" py={4} color="brand.500">
                                {node.children[0].data}
                            </Heading>
                        );
                    case 'h3':
                        return (
                            <Heading as={`${node.name}`} size="md" py={4} color="brand.500">
                                {node.children[0].data}
                            </Heading>
                        );
                    case 'h4':
                        return (
                            <Heading as={`${node.name}`} size="md" fontSize="18px" py={4} color="brand.500">
                                {node.children[0].data}
                            </Heading>
                        );
                    case 'h5':
                        return (
                            <Heading as={`${node.name}`} size="sm" py={4} color="brand.500">
                                {node.children[0].data}
                            </Heading>
                        );
                    case 'h6':
                        return (
                            <Heading as={`${node.name}`} size="xs" py={4} color="brand.500">
                                {node.children[0].data}
                            </Heading>
                        );
                    case 'a':
                        return (
                            <Link href={`${node.attribs.href}`} color="brand.500">
                                {node.children[0].data}
                            </Link>
                        );
                    case 'img':
                        return (
                            <Box d="flex" w="100%" justifyContent="center">
                                <Image src={`${node.attribs.src}`} maxW="60%" objectFit="contain" alt="alt" />
                            </Box>
                        );
                }
            }
        }
    });
};
export default htmlToChakra;
