import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Admin = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          ניהול תוכן
        </Text>
        <Text>דף לניהול תוכן של דפי גלריה, המלצות, ובלוג.</Text>
      </VStack>
    </Container>
  );
};

export default Admin;
