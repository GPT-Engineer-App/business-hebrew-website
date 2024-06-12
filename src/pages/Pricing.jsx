import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          מחירון
        </Text>
        <Text>טבלה מפורטת של שירותים ומחירים.</Text>
      </VStack>
    </Container>
  );
};

export default Pricing;
