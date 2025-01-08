import {
    Box,
    Avatar,
    Text,
    Flex,
    Divider,
    List,
    ListItem,
    Stat,
    StatLabel,
    StatHelpText,
    StatNumber,
    VStack,
    Progress,
} from "@chakra-ui/react";
import { FaRunning, FaClock, FaHeart, FaChartLine } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <Box
            as="aside"
            bg="white"
            w="300px"
            h="100vh"
            boxShadow="lg"
            p={6}
            position="fixed"
            top={0}
            right={0}
            zIndex={2}
            overflowY="auto"
        >
            {/* User Profile Section */}
            <Flex mb={6} alignItems="center">
                <Avatar name="Drip Nigga" size="lg" mr={4} />
                <Box>
                    <Text fontWeight="bold" fontSize="lg">
                        Dripp Niggaaaaa
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        User ID: 12345
                    </Text>
                </Box>
            </Flex>

            <Divider />

            {/* Overview Section */}
            <Text as="h2" fontWeight="bold" mt={6} mb={4} fontSize="lg">
                Overview
            </Text>
            <List spacing={4}>
                <ListItem>
                    <Stat
                        p={4}
                        bg="blue.50"
                        boxShadow="sm"
                        borderRadius="md"
                        transition="all 0.3s"
                        _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
                    >
                        <Flex alignItems="center">
                            <Box as={FaRunning} color="blue.400" fontSize="2xl" mr={4} />
                            <Box>
                                <StatLabel fontSize="md" fontWeight="bold" color="blue.600">
                                    Most Common Workout
                                </StatLabel>
                                <StatHelpText fontSize="sm" color="gray.600">
                                    Running
                                </StatHelpText>
                            </Box>
                        </Flex>
                    </Stat>
                </ListItem>

                <ListItem>
                    <Stat
                        p={4}
                        bg="orange.50"
                        boxShadow="sm"
                        borderRadius="md"
                        transition="all 0.3s"
                        _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
                    >
                        <Flex alignItems="center">
                            <Box as={FaClock} color="orange.400" fontSize="2xl" mr={4} />
                            <Box>
                                <StatLabel fontSize="md" fontWeight="bold" color="orange.600">
                                    Total Workout Time
                                </StatLabel>
                                <StatHelpText fontSize="sm" color="gray.600">
                                    1258 hrs
                                </StatHelpText>
                            </Box>
                        </Flex>
                    </Stat>
                </ListItem>

                <ListItem>
                    <Stat
                        p={4}
                        bg="red.50"
                        boxShadow="sm"
                        borderRadius="md"
                        transition="all 0.3s"
                        _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
                    >
                        <Flex alignItems="center">
                            <Box as={FaHeart} color="red.400" fontSize="2xl" mr={4} />
                                <Box>
                                <StatLabel fontSize="md" fontWeight="bold" color="red.600">
                                    Risk of Heart Attack
                                </StatLabel>
                                <StatHelpText fontSize="sm" color="gray.600">
                                    Low
                                </StatHelpText>
                            </Box>
                        </Flex>
                    </Stat>
                </ListItem>

                <ListItem>
                    <Stat
                        p={4}
                        bg="green.50"
                        boxShadow="sm"
                        borderRadius="md"
                        transition="all 0.3s"
                        _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
                    >
                        <Flex alignItems="center">
                            <Box as={FaChartLine} color="green.400" fontSize="2xl" mr={4} />
                            <Box>
                                <StatLabel fontSize="md" fontWeight="bold" color="green.600">
                                    Overall Fitness Score
                                </StatLabel>
                                <StatHelpText fontSize="sm" color="gray.600">
                                    85
                                </StatHelpText>
                            </Box>
                        </Flex>
                    </Stat>
                </ListItem>
            </List>
        </Box>
    );
};

export default RightSideBar;
