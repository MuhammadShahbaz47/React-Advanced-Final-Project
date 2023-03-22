import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      style={{
        display: "flex",
        alignItems: "flex-end",
        backgroundColor: "white",
        borderRadius: "12px",
      }}
    >
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <VStack
        style={{ padding: "12px", display: "flex", alignItems: "flex-start" }}
      >
        <Heading color="black" as="h2" size="sm">
          {title}
        </Heading>
        <Text color="grey" fontSize="sm">
          {description}
        </Text>

        <HStack style={{ display: "flex" }}>
          <Text as="b" textAlign="left" color="#242526" fontSize="sm">
            see more
          </Text>
          <FontAwesomeIcon size="xs" color="#242526" icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
