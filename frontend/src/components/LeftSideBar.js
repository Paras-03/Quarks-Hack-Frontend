import { Box, VStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaChartPie, FaCog, FaLock } from "react-icons/fa";

const LeftSideBar = () => {
  return (
    <Box
      as="aside"
      bg="white"
      w="60px"
      h="100vh"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={6}
      position="fixed"
      left={0}
      top={0}
      zIndex={2}
    >
      {/* Sidebar Icons */}
      <VStack spacing={6}>
        <IconButton
          aria-label="Home"
          icon={<FaHome />}
          variant="ghost"
          size="lg"
          fontSize="24px"
          _hover={{ color: "orange.400" }}
        />
        <IconButton
          aria-label="User"
          icon={<FaUser />}
          variant="ghost"
          size="lg"
          fontSize="24px"
          _hover={{ color: "orange.400" }}
        />
        <IconButton
          aria-label="Messages"
          icon={<FaEnvelope />}
          variant="ghost"
          size="lg"
          fontSize="24px"
          _hover={{ color: "orange.400" }}
        />
        <IconButton
          aria-label="Analytics"
          icon={<FaChartPie />}
          variant="ghost"
          size="lg"
          fontSize="24px"
          _hover={{ color: "orange.400" }}
        />
        <IconButton
          aria-label="Settings"
          icon={<FaCog />}
          variant="ghost"
          size="lg"
          fontSize="24px"
          _hover={{ color: "orange.400" }}
        />
        <IconButton
          aria-label="Lock"
          icon={<FaLock />}
          variant="ghost"
          size="lg"
          fontSize="24px"
          _hover={{ color: "orange.400" }}
        />
      </VStack>
    </Box>
  );
};

export default LeftSideBar;
