import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          אודות
        </Text>
        <Text>א.ל פרויקטים מספקים שירותי הנדימן ושיפוצים ברמה הגבוהה ביותר. הצוות שלנו מקצועי ומנוסה, ומתחייב לשירות איכותי ואמין.</Text>
      </VStack>
    </Container>
  );
};

export default About;
