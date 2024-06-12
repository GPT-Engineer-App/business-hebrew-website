import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          בלוג
        </Text>
        <Text>פוסטים ומאמרים רלוונטיים לתחום ההנדימן והשיפוצים.</Text>
      </VStack>
    </Container>
  );
};

export default Blog;
