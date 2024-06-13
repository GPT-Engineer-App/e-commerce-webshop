import { Container, Text, VStack, Box, Image, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, name: "Product 1", price: "$10.00", image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", price: "$20.00", image: "/images/product2.jpg" },
  { id: 3, name: "Product 3", price: "$30.00", image: "/images/product3.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Our Webshop</Heading>
        <Text fontSize="xl">Find the best products here!</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack spacing={4} mt={4}>
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text fontSize="lg">{product.price}</Text>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
                  Add to Cart
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;