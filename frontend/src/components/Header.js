import { Box, Flex, Heading, Button, IconButton, Spacer } from "@chakra-ui/react";
import { BellIcon, AddIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box
    as="header"
    bg="white"
    px={6}
    py={4}
    boxShadow="sm"
    w="calc(100% - 360px)"
    ml="60px"
    mr="300px"
    position="fixed"
    top={0}
    zIndex={1}
    >
      <Flex alignItems="center">
        {/* Welcome Section */}
        <Heading as="h1" fontSize="2xl" color="gray.700">
          Welcome Back <span role="img" aria-label="celebration">🎉</span>
        </Heading>

        <Spacer />

        {/* Header Actions */}
        <Flex alignItems="center" gap={4}>
          {/* Subscribe Button */}
          <Button
            colorScheme="orange"
            bg="orange.400"
            color="white"
            _hover={{ bg: "orange.500" }}
          >
            Subscribe
          </Button>

          {/* Notification Icon */}
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
            size="lg"
            fontSize="20px"
          />

          {/* Add Icon */}
          <IconButton
            aria-label="Add"
            icon={<AddIcon />}
            variant="ghost"
            size="lg"
            fontSize="20px"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
