import React from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  Image,
  Heading,
  Text,
  Box,
  Divider
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
        <Container
          borderRadius="sm"
          backgroundColor="white"
          boxShadow="md"
          padding={4}
          maxWidth="container.xl"
        >
          <VStack marginBottom={6}>
            <Image borderRadius={9999} src="https://picsum.photos/128/128" />
            <Heading>Almacén</Heading>
            <Text>El Almacén de Pedro</Text>
          </VStack>
          <Divider marginY={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
