import { Container, Box, Text, VStack, HStack, AspectRatio } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <HStack spacing={8} width="100%">
          <VStack spacing={4} width="50%">
            <Text fontSize="xl" fontWeight="bold">
              User 1
            </Text>
            <AspectRatio ratio={16 / 9} width="100%">
              <Box bg="gray.200" display="flex" justifyContent="center" alignItems="center">
                <FaVideo size="3em" color="gray.500" />
              </Box>
            </AspectRatio>
          </VStack>
          <VStack spacing={4} width="50%">
            <Text fontSize="xl" fontWeight="bold">
              User 2
            </Text>
            <AspectRatio ratio={16 / 9} width="100%">
              <Box bg="gray.200" display="flex" justifyContent="center" alignItems="center">
                <FaVideo size="3em" color="gray.500" />
              </Box>
            </AspectRatio>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
