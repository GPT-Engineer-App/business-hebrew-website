import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Quote = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          הצעת מחיר
        </Text>
        <Text>טופס להצעת מחיר שישלח במייל.</Text>
      </VStack>
    </Container>
  );
};

export default Quote;
