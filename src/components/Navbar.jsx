import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg" color="white">
          <Link to="/">Webshop</Link>
        </Heading>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
          <Link to="/cart">Cart</Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;