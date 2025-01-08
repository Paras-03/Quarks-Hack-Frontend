import { Box, Text, Flex, VStack, Heading, Progress, Divider, Grid, GridItem } from "@chakra-ui/react";

const MainComponent = () => {
  return (
    <Box
      as="main"
      bg="gray.50"
      ml="60px" // Space for Left Sidebar
      mr="300px" // Space for Right Sidebar
      mt="72px" // Space for Header
      p={6}
      minH="calc(100vh - 72px)" // Adjust height to prevent overflow
    >

      {/* Statistics Section */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={6}>
        <GridItem bg="white" p={4} boxShadow="sm" borderRadius="md">
          <Text fontSize="sm" color="gray.500">
            Steps
          </Text>
          <Heading fontSize="2xl" color="teal.500">
            2,500
          </Heading>
          <Text fontSize="xs" color="gray.400">
            50% of your goals
          </Text>
        </GridItem>
        <GridItem bg="white" p={4} boxShadow="sm" borderRadius="md">
          <Text fontSize="sm" color="gray.500">
            Water
          </Text>
          <Heading fontSize="2xl" color="blue.400">
            1.25 Liters
          </Heading>
          <Text fontSize="xs" color="gray.400">
            Stay Hydrated
          </Text>
        </GridItem>
        <GridItem bg="white" p={4} boxShadow="sm" borderRadius="md">
          <Text fontSize="sm" color="gray.500">
            Calories
          </Text>
          <Heading fontSize="2xl" color="pink.400">
            Today Under
          </Heading>
        </GridItem>
        <GridItem bg="white" p={4} boxShadow="sm" borderRadius="md">
          <Text fontSize="sm" color="gray.500">
            Heart Rate
          </Text>
          <Heading fontSize="2xl" color="purple.400">
            110 bpm
          </Heading>
        </GridItem>
      </Grid>

      {/* Activity Section */}
      <Box bg="white" p={6} boxShadow="sm" borderRadius="md" mb={6}>
        <Flex justifyContent="space-between" mb={4}>
          <Heading fontSize="lg">Activity</Heading>
          <Text fontSize="sm" color="gray.500">
            Weekly
          </Text>
        </Flex>
        <Flex justifyContent="space-around">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <VStack key={index}>
              <Box
                bg={day === "Fri" ? "orange.400" : "gray.200"}
                h={`${day === "Fri" ? 50 : 30}px`}
                w={4}
                borderRadius="sm"
              ></Box>
              <Text fontSize="xs">{day}</Text>
            </VStack>
          ))}
        </Flex>
      </Box>

      {/* Progress Section */}
      <Box bg="white" p={6} boxShadow="sm" borderRadius="md">
        <Flex justifyContent="space-between" mb={4}>
          <Heading fontSize="lg">Progress</Heading>
          <Text fontSize="sm" color="gray.500">
            Weekly
          </Text>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {[
            { name: "Cardio", hours: 30, color: "teal.500" },
            { name: "Stretching", hours: 40, color: "blue.400" },
            { name: "Treadmill", hours: 30, color: "orange.400" },
            { name: "Strength", hours: 20, color: "pink.400" },
          ].map((item, index) => (
            <GridItem key={index} textAlign="center">
              <Heading fontSize="2xl" color={item.color}>
                {item.hours} hrs
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {item.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MainComponent;
