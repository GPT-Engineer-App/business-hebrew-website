import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          המלצות
        </Text>
        <Text>המלצות מלקוחות מרוצים שלנו.</Text>
      </VStack>
    </Container>
  );
};

export default Testimonials;
