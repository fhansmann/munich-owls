import { Box, Text, Flex } from '@chakra-ui/core';
import Header from '../components/Header';

const About = () => (
  <Flex flexDirection="column">
    <Header />
    <Box mr="20px" m="auto" textAlign="center" w="100%" maxW="1200px">
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center" p={5}>
        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="330px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            What is Munich Owls?
          </Text>
          <Text fontSize="sm">
            Munich Owls is a community project to create awareness for dangerous
            potholes and other obstacles on the streets with the primary goal to
            prevent accidents of any kind.
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="330px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            How does it work?
          </Text>
          <Text fontSize="sm">
            We provide a current map of Munich’s pathways showing dangerous
            spots. The spots have been marked by other community members. The
            little red owls serve as location markers and by clicking on them
            your received some additional information. Please note that
            everybody is able to see check out the owls at all times and there
            is no registration required.
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="330px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            How can I mark spots on the map?
          </Text>
          <Text fontSize="sm">
            If you want to join this community, we need you to sign-up. The sole
            purpose of the sign-up process is to prevent site visitors from
            spamming the map (yes, sadly this happened). Once you have an
            account, you can directly mark dangerous spots on the map
            anonymously. We keep your data safe and do not share any data with
            third parties. For more information, please review our privacy &
            cookie policy.
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="330px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            What spots should I mark?
          </Text>
          <Text fontSize="sm">
            Any spots that you personally come across and deem as dangerous for
            anyone using cycling paths (such as cyclists, scooter riders, etc.).
            The most obvious obstacles would be potholes but dangerous routing
            due to temporary construction work would be equally worth marking!
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="330px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            Why did you built it?
          </Text>
          <Text fontSize="sm">
            We are a small team of creators and we are big cycling fans. We have
            seen many dangerous spots on the streets but lacked a platform to
            pass on this information effectively to others. Our goal is build a
            community that cares about the safety of others and provides &
            receives real-time information on the state of the local pathways.
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="330px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            Why does it matter?
          </Text>
          <Text fontSize="sm">
            We love riding our bikes through the city and know that may other do
            so as well. In fact, cycling and other alternative means of
            individual transportation are increasingly popular, not just in
            Munich. Unfortunately, the streets are not always well-maintained
            posing a danger to people using these means. This is why we built
            Munich Owls.
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="200px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            Is this project backed by the city administration of Munich?
          </Text>
          <Text fontSize="sm">
            No, this is a private "not for profit" project.
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="200px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            Will you notify the city administration of dangerous spots?
          </Text>
          <Text fontSize="sm">
            We will verify the dangerous spots and notify the administration of
            Munich so that they can take immediate action.
          </Text>
        </Box>

        <Box
          p={5}
          m={5}
          bg="gray.100"
          width="330px"
          height="200px"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text fontWeight="bold" fontSize="sm" mb={3}>
            I have some feedback, can I contact you?
          </Text>
          <Text fontSize="sm">
            Absolutely! We are happy to receive messages from you at
            hansmann.f@gmail.com. Many thanks for stopping by!
          </Text>
        </Box>
      </Flex>
    </Box>
  </Flex>
);
export default About;
