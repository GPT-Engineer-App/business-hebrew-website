import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          צור קשר
        </Text>
        <Text>טלפון: +972528405975</Text>
        <Text>דוא"ל: effi35@gmail.com</Text>
        <Text>כתובת: הרצליה, ישראל</Text>
      </VStack>
    </Container>
  );
};

export default Contact;
