import { Box, Image, SimpleGrid } from '@chakra-ui/react';

const Gallery = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Image src="/images/monkey1.png" alt="Playful Monkey" boxSize="100%" borderRadius="lg" />
        <Image src="/images/monkey2.png" alt="Monkey on Branch" boxSize="100%" borderRadius="lg" />
        <Image src="/images/monkey3.png" alt="Group of Monkeys" boxSize="100%" borderRadius="lg" />
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;