import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const PaymentOptions = ({ totalAmount }) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);

  const handleSuccess = (details, data) => {
    setPaid(true);
    console.log("Payment successful!", details, data);
  };

  const handleError = (err) => {
    setError(err);
    console.error("Payment error!", err);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>Payment Options</Heading>
      {paid ? (
        <Text fontSize="xl" color="green.500">Payment successful! Thank you for your purchase.</Text>
      ) : (
        <VStack spacing={5}>
          <Box w="full">
            <Heading as="h3" size="md" mb={3}>Pay with PayPal</Heading>
            <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: totalAmount,
                      },
                    }],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(handleSuccess);
                }}
                onError={handleError}
              />
            </PayPalScriptProvider>
          </Box>
          <Box w="full">
            <Heading as="h3" size="md" mb={3}>Pay with iDEAL (Placeholder)</Heading>
            <Text>iDEAL payment integration will be implemented here.</Text>
          </Box>
          {error && <Text fontSize="xl" color="red.500">Payment error: {error.message}</Text>}
        </VStack>
      )}
    </Box>
  );
};

export default PaymentOptions;