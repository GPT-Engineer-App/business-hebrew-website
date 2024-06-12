import React from "react";
import { Container, VStack, Text, Box, Image, Button, HStack, Link, IconButton } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="blue.50">
      <VStack spacing={8}>
        <Box w="100%" bg="blue.200" p={4} borderRadius="md" textAlign="center">
          <Image src={logo} alt="א.ל פרויקטים לוגו" mx="auto" />
        </Box>

        <HStack spacing={4}>
          <IconButton as={Link} href="https://www.facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton as={Link} href="https://www.instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton as={Link} href="https://www.tiktok.com/@effiflao" aria-label="TikTok" icon={<FaTiktok />} size="lg" />
          <IconButton as={Link} href="https://youtube.com/@effiflao?si=wcdtW1Pjn72wQhyp" aria-label="YouTube" icon={<FaYoutube />} size="lg" />
          <IconButton as={Link} href="https://wa.me/972528405975" aria-label="WhatsApp" icon={<FaWhatsapp />} size="lg" />
        </HStack>

        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            א.ל פרויקטים
          </Text>
          <Text>ברוכים הבאים לאתר של א.ל פרויקטים! אנו מספקים מגוון רחב של שירותי הנדימן ושיפוצים, מעבודות קטנות כמו תיקונים והתקנות ביתיות עד לשיפוצים גדולים של דירות.</Text>
          <Button colorScheme="blue" size="lg">
            צור קשר
          </Button>
        </VStack>

        <VStack spacing={4} align="start">
          <Text fontSize="xl" fontWeight="bold">
            השירותים שלנו
          </Text>
          <Text>אנו מציעים שירותי תיקונים, התקנות, ושיפוצים ברמה הגבוהה ביותר. צוות המומחים שלנו כאן כדי לעזור לכם בכל צורך.</Text>
          <Button colorScheme="blue" size="lg">
            למידע נוסף
          </Button>
        </VStack>

        <VStack spacing={4} align="start">
          <Text fontSize="xl" fontWeight="bold">
            צרו איתנו קשר
          </Text>
          <Text>טלפון: +972528405975</Text>
          <Text>דוא"ל: effi35@gmail.com</Text>
          <Text>כתובת: הרצליה, ישראל</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
