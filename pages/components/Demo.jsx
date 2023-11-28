import React from "react";
import { Flex, Button, Text, Container } from "@radix-ui/themes";
const Demo = () => {
  return (
    <Container>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :</Text>
        <Button>submit</Button>
      </Flex>
    </Container>
  );
};

export default Demo;
