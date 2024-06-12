import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} bg="blue.200" p={4}>
      <Link as={NavLink} to="/">
        דף הבית
      </Link>
      <Link as={NavLink} to="/about">
        אודות
      </Link>
      <Link as={NavLink} to="/services">
        שירותים
      </Link>
      <Link as={NavLink} to="/gallery">
        גלריה
      </Link>
      <Link as={NavLink} to="/testimonials">
        המלצות
      </Link>
      <Link as={NavLink} to="/contact">
        צור קשר
      </Link>
      <Link as={NavLink} to="/blog">
        בלוג
      </Link>
      <Link as={NavLink} to="/pricing">
        מחירון
      </Link>
      <Link as={NavLink} to="/quote">
        הצעת מחיר
      </Link>
      <Link as={NavLink} to="/admin">
        ניהול תוכן
      </Link>
    </HStack>
  );
};

export default Navigation;
