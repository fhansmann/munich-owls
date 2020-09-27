import { Flex, Text, Icon, Image, Heading } from '@chakra-ui/core';

const About = () => (
  <Flex flexDirection="column" justifyContent="center">
    <Flex alignItems="center">
      <Image height="65px" width="65px" src="owl.png" />
      <Heading as="h1" size="lg">
        {' '}
        MUNICH OWLS{' '}
      </Heading>
    </Flex>
    <Flex justifyContent="center">
      <Text>Text value</Text>
      <Icon name="copy" />
    </Flex>
    <Flex justifyContent="center">
      <Text>Text value</Text>
      <Icon name="copy" />
    </Flex>
    <Flex justifyContent="center">
      <Text>Text value</Text>
      <Icon name="copy" />
    </Flex>
    <Flex justifyContent="center">
      <Text>Text value</Text>
      <Icon name="copy" />
    </Flex>
    <Flex justifyContent="center">
      <Text>Text value</Text>
      <Icon name="copy" />
    </Flex>
  </Flex>
);
export default About;
