import { Box, Text, Heading, Flex, Icon } from '@chakra-ui/core';
import { Questions } from '../data/about';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="background-full">
      <Header />
      <Flex direction="column" align="center" w="100%">
        {Questions.map((item) => (
          <Box
            key={item.id}
            w={{ base: '300px', md: '600px' }}
            p={5}
            mt={4}
            shadow="lg"
            bg="#E5E5E5"
          >
            <Heading fontSize="sm">{item.question}</Heading>
            <Text fontSize="sm" mt={4}>
              <Icon name="chevron-right" />
              {item.answer}
            </Text>
          </Box>
        ))}
      </Flex>
      <Box mb={16} />
    </div>
  );
};

export default About;
