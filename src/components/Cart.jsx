import { Box, Button, Heading, VStack, Text, Image } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>Shopping Cart</Heading>
      <VStack spacing={5}>
        {cartItems.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          cartItems.map((item) => (
            <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} w="full">
              <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" />
              <VStack spacing={2} align="start" mt={4}>
                <Heading as="h3" size="md">{item.name}</Heading>
                <Text fontSize="lg">{item.price}</Text>
                <Button leftIcon={<FaTrash />} colorScheme="red" variant="solid" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </VStack>
            </Box>
          ))
        )}
      </VStack>
      {cartItems.length > 0 && (
        <Box mt={5}>
          <Heading as="h3" size="lg">Total: {total}</Heading>
          <Button as={Link} to="/payment" colorScheme="teal" variant="solid">
            Proceed to Payment
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;