import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          גלריה
        </Text>
        <Text>תמונות וסרטונים מפרויקטים שונים שביצענו.</Text>
      </VStack>
    </Container>
  );
};

export default Gallery;
