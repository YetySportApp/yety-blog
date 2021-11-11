import React, { useState } from 'react';
import { Box, Flex, HStack, Icon, SlideFade, useDisclosure, Image } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import config from '../config/config';

const ProductCardImageCarousel = ({ gallery }) => {
    const { isOpen, onToggle } = useDisclosure();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = gallery.length;

    if (slidesCount > 1) {
        return (
            <Flex w="full" h="100%" pos="relative" onMouseEnter={onToggle} onMouseLeave={onToggle} border="none">
                <Flex w="full" pos="relative" ml={`-${currentSlide * 100}%`}>
                    {gallery.map((slide, sid) => {
                        return (
                            <Box key={`slide-${sid}-${slide.id}`} boxSize="full" shadow="md" flex="none">
                                <Image
                                    src={`${config.uploadsEndpoint}${slide.url}`}
                                    alt={`${config.uploadsEndpoint}${slide.alternativeText || ''}`}
                                    h="100%"
                                    w="100%"
                                    pos="relative"
                                    objectFit={'cover'}
                                    roundedTop="lg"
                                    border="none"
                                />
                            </Box>
                        );
                    })}
                </Flex>
                <SlideFade in={isOpen}>
                    <Box
                        cursor="pointer"
                        color="primary.500"
                        pos="absolute"
                        left="8px"
                        w="24px"
                        h="24px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        boxShadow="dark-lg"
                        top="calc(50% - 12px)"
                        bgColor="white"
                        translateY="-50%"
                        borderRadius="50%"
                        zIndex="1"
                        overflow="visible"
                        transition="all 0.6s ease"
                        _hover={{
                            bgColor: 'primary.500',
                            cursor: 'pointer'
                        }}
                    >
                        <Icon
                            w="24px"
                            h="24px"
                            as={FiChevronLeft}
                            transition="all 0.6s ease"
                            _hover={{
                                color: 'white'
                            }}
                            onClick={() => setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))}
                        />
                    </Box>
                    <Box
                        pos="absolute"
                        color="primary.500"
                        w="24px"
                        h="24px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        right="8px"
                        boxShadow="dark-lg"
                        top="calc(50% - 12px)"
                        bgColor="white"
                        translateY="-50%"
                        borderRadius="50%"
                        zIndex="1"
                        overflow="visible"
                        transition="all 0.6s ease"
                        _hover={{
                            bgColor: 'primary.500',
                            cursor: 'pointer'
                        }}
                    >
                        <Icon
                            w="24px"
                            h="24px"
                            as={FiChevronRight}
                            transition="all 0.6s ease"
                            _hover={{
                                color: 'white'
                            }}
                            onClick={() => setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))}
                        />
                    </Box>
                </SlideFade>
                <HStack justify="center" pos="absolute" bottom="5px" w="full">
                    <SlideFade in={isOpen}>
                        {Array.from({ length: slidesCount }).map((_, slide) => (
                            <Box
                                key={`dots-${slide}`}
                                cursor="pointer"
                                w={currentSlide === slide ? '25px' : '7px'}
                                h="7px"
                                m="0 2px"
                                borderWidth="1px"
                                borderColor="primary.300"
                                bg={currentSlide === slide ? 'primary.500' : 'primary.200'}
                                rounded={currentSlide === slide ? '25px' : '50%'}
                                display="inline-block"
                                transition="width 0.4s ease"
                                _hover={{ bg: 'primary.500' }}
                                onClick={() => setCurrentSlide(slide)}
                            ></Box>
                        ))}
                    </SlideFade>
                </HStack>
            </Flex>
        );
    }
    return null;
};
export default ProductCardImageCarousel;
