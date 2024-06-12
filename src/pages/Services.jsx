import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          השירותים שלנו
        </Text>
        <Text>אנו מציעים מגוון רחב של שירותי תיקונים, התקנות, ושיפוצים. צוות המומחים שלנו כאן כדי לעזור לכם בכל צורך.</Text>
      </VStack>
    </Container>
  );
};

export default Services;
