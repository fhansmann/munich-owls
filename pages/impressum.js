import { Box, Text, Flex, Heading } from '@chakra-ui/core';
import Header from '../components/Header';

const About = () => (
  <Flex flexDirection="column">
    <Header />

    <Box m="20px auto" textAlign="start" w={{ base: '300px', md: '700px' }}>
      <Text fontSize="sm">
        <Heading fontSize="sm">Impressum</Heading>
      </Text>
    </Box>
  </Flex>
);
export default About;
