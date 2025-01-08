import {
    Box,
    Avatar,
    Text,
    Flex,
    Progress,
    VStack,
    Divider,
    List,
    ListItem,
    ListIcon,
  } from "@chakra-ui/react";
  import { FaRunning, FaBed, FaWeight, FaCalendar } from "react-icons/fa";
  
  const RightSideBar = () => {
    return (
        <Box
            as="aside"
            bg="white"
            w="300px"
            h="100vh"
            boxShadow="md"
            p={6}
            position="fixed"
            top={0}
            right={0}
            zIndex={2}
            overflowY="auto"
        >
            <Flex mb={6}>
            {/* Avatar height adjusted to match the header height */}
            <Avatar name="Thomas Fletcher" size="lg" mr={4} height="60px" />
            <Box>
                <Text fontWeight="bold" fontSize="lg">
                Thomas Fletcher
                </Text>
                <Text fontSize="sm" color="gray.500">
                Sydney, Australia
                </Text>
            </Box>
            </Flex>
  
            <Divider />
    
            {/* User Stats Section */}
            <VStack spacing={4} mt={6} align="stretch">
            <Flex justifyContent="space-between">
                <Text fontSize="sm" color="gray.500">
                Weight
                </Text>
                <Text fontWeight="bold">75 kg</Text>
            </Flex>
            <Flex justifyContent="space-between">
                <Text fontSize="sm" color="gray.500">
                Height
                </Text>
                <Text fontWeight="bold">6.5 ft</Text>
            </Flex>
            <Flex justifyContent="space-between">
                <Text fontSize="sm" color="gray.500">
                Age
                </Text>
                <Text fontWeight="bold">25 yrs</Text>
            </Flex>
            </VStack>
    
            <Divider my={6} />
    
            {/* User Goals Section */}
            <Text fontWeight="bold" mb={4}>
            Your Goals
            </Text>
            <List spacing={4}>
            <ListItem>
                <Flex alignItems="center">
                <ListIcon as={FaRunning} color="orange.400" />
                <Box flex="1">
                    <Text fontSize="sm" fontWeight="bold">
                    Running
                    </Text>
                    <Progress value={79} colorScheme="orange" size="sm" />
                </Box>
                <Text fontSize="sm" fontWeight="bold" ml={4}>
                    79%
                </Text>
                </Flex>
            </ListItem>
            <ListItem>
                <Flex alignItems="center">
                <ListIcon as={FaBed} color="blue.400" />
                <Box flex="1">
                    <Text fontSize="sm" fontWeight="bold">
                    Sleeping
                    </Text>
                    <Progress value={60} colorScheme="blue" size="sm" />
                </Box>
                <Text fontSize="sm" fontWeight="bold" ml={4}>
                    60%
                </Text>
                </Flex>
            </ListItem>
            <ListItem>
                <Flex alignItems="center">
                <ListIcon as={FaWeight} color="pink.400" />
                <Box flex="1">
                    <Text fontSize="sm" fontWeight="bold">
                    Weight Loss
                    </Text>
                    <Progress value={60} colorScheme="pink" size="sm" />
                </Box>
                <Text fontSize="sm" fontWeight="bold" ml={4}>
                    60%
                </Text>
                </Flex>
            </ListItem>
            </List>
    
            <Divider my={6} />
    
            {/* Monthly Progress Section */}
            <Text fontWeight="bold" mb={4}>
            Monthly Progress
            </Text>
            <Flex alignItems="center">
            <Box flex="1">
                <Text fontSize="sm" color="gray.500">
                You have achieved
                </Text>
                <Text fontWeight="bold" fontSize="xl" color="orange.400">
                80%
                </Text>
                <Text fontSize="sm" color="gray.500">
                of your goal this month
                </Text>
            </Box>
            </Flex>
    
            <Divider my={6} />
    
            {/* Scheduled Activities */}
            <Text fontWeight="bold" mb={4}>
            Scheduled
            </Text>
            <List spacing={4}>
            <ListItem>
                <Flex alignItems="center">
                <ListIcon as={FaCalendar} color="green.400" />
                <Box>
                    <Text fontWeight="bold" fontSize="sm">
                    Training - Yoga Class
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                    22 Mar
                    </Text>
                </Box>
                </Flex>
            </ListItem>
            <ListItem>
                <Flex alignItems="center">
                <ListIcon as={FaCalendar} color="green.400" />
                <Box>
                    <Text fontWeight="bold" fontSize="sm">
                    Training - Swimming
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                    22 Mar
                    </Text>
                </Box>
                </Flex>
            </ListItem>
            </List>
      </Box>
    );
  };
  
  export default RightSideBar;
  