import React, { useState } from "react";
import {
    Box,
    Text,
    Grid,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Table,
    Tbody,
    Tr,
    Td,
    Th,
    Thead,
    useDisclosure,
} from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeart, FaBed, FaBalanceScale, FaClipboardList, FaTired } from "react-icons/fa";
import BarChart from "./BarChart";

const MainComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
    {
        label: "Basic Metrics",
        icon: <FaRunning size="36px" />,
        data: {
        "Total Steps": 12000,
        "Average Daily Steps": 8000,
        "Step Range": "5000-15000",
        },
    },
    {
        label: "Activity Analysis",
        icon: <FaDumbbell size="36px" />,
        data: {
        "Average Calories": 250,
        "Total Active Minutes": 300,
        "Average Daily Active Minutes": 45,
        "Minimum Active Minutes": 10,
        "Maximum Active Minutes": 90,
        "Days Over 30 Minutes Active": 5,
        },
    },
    {
        label: "Sleep Patterns",
        icon: <FaBed size="36px" />,
        data: {
        "Average Sleep Hours": 6.3,
        "Min Sleep Hours": 3.1,
        "max_sleep_hours": 9.2,
        "sleep_range": "3.1 - 9.2",
        },
    },
    {
        label: "Stress and Recovery",
        icon: <FaTired size="36px" />,
        data: {
        "Low Sleep": "True",
        "High Heart Rate": "False",
        },
    },
    {
        label: "Heart Health Indicators",
        icon: <FaHeart size="36px" />,
        data: {
        "Lowest Heart Rate": "60 bpm",
        "Highest Heart Rate": "150 bpm",
        "Average Heart Rate": "110 bpm",
        "Heart Rate Range": "60-150 bpm",
        },
    },
    {
        label: "Health Risk Indicators",
        icon: <FaBalanceScale size="36px" />,
        data: {
        "Sedentary Days": 7,
        "Overactive Days": 3,
        "Poor Sleep Days": 5,
        },
    },
    {
        label: "Performance Extremes",
        icon: <FaClipboardList size="36px" />,
        data: {
        "Best Steps": 22850,
        "Worst Steps": 2,
        "Best Active Score": 482,
        "Worst Active Score": 18,
        },
    },
    {
        label: "Consistent Activity Days",
        icon: <FaRunning size="36px" />,
        data: {
        "Days with Steady Activity": 10,
        "Days with Very Low Activity": 3,
        },
    },
    ];

    const openCategory = (category) => {
    setActiveCategory(category);
    onOpen();
    };

    // Example advice array
    const adviceArray = [
    "Stay active, stay healthy!",
    "Don't push yourself too hard. Take breaks when needed.",
    "Consistency is key to maintaining a healthy lifestyle.",
    "Listen to your body and rest when you need it.",
    "A healthy mind is as important as a healthy body.",
    "Exercise not only transforms your body, but also your mind."
    ];

    // Randomly select an advice
    const randomAdvice = adviceArray[Math.floor(Math.random() * adviceArray.length)];

    return (
        <Box
            as="main"
            bg="gray.100"
            ml="60px"
            mr="300px"
            mt="72px"
            p={6}
            minH="calc(100vh - 72px)"
        >
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Health Dashboard
            </Text>
            <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
            {categories.map((category, index) => (
                <GridItem
                key={index}
                p={4}
                borderRadius="md"
                bg="white"
                boxShadow="md"
                cursor="pointer"
                _hover={{ bg: "teal.50", transform: "scale(1.02)" }}
                transition="all 0.2s"
                onClick={() => openCategory(category)}
                >
                <Stat textAlign="center" fontSize="lg">
                    <StatLabel fontWeight="semibold">{category.label}</StatLabel>
                    <StatNumber fontSize="3xl">{category.icon}</StatNumber>
                </Stat>
                </GridItem>
            ))}
            </Grid>

            {/* Bar chart section */}
            <Box mt={8} bg="white" p={6} borderRadius="md" boxShadow="md">
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Daily Overall Fitness Score
                </Text>
                <BarChart />
            </Box>

            {/* Advice */}
            <Box 
  mt={6} 
  bg="linear-gradient(135deg, rgba(0, 204, 204, 0.4), rgba(0, 135, 135, 0.6))"
  p={8} 
  borderRadius="xl" 
  boxShadow="2xl" 
  display="flex" 
  flexDirection="column" 
  alignItems="center" 
  justifyContent="center"
  maxW="500px"
  mx="auto"
  animation="fadeIn 1s ease-out"
  transition="all 0.3s ease-in-out"
>
  <Text 
    fontSize="2xl" 
    fontWeight="bold" 
    mb={4} 
    color="white" 
    textAlign="center"
    letterSpacing="wider"
    textTransform="uppercase"
    textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
  >
    Thought of the Day
  </Text>
  <Text 
    fontSize="lg" 
    color="white" 
    textAlign="center" 
    lineHeight="1.6" 
    fontStyle="italic"
    maxW="80%"
    mb={6}
    textShadow="1px 1px 3px rgba(0, 0, 0, 0.3)"
  >
    {randomAdvice}
  </Text>
  <Box
    as="span"
    display="inline-block"
    height="4px"
    width="50px"
    bg="teal.400"
    borderRadius="full"
    mb={4}
  />
  <Text color="teal.100" fontSize="sm" textAlign="center" fontWeight="semibold">
    Stay Positive, Stay Healthy!
  </Text>
</Box>


            {activeCategory && (
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
            >
              <ModalHeader
                bg="teal.600"
                color="white"
                fontSize="xl"
                fontWeight="bold"
                p={4}
                borderTopRadius="lg"
                textAlign="center"
              >
                {activeCategory.label}
              </ModalHeader>
              <ModalCloseButton color="white" />
              <ModalBody p={6}>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th fontWeight="bold" color="teal.700">Metric</Th>
                      <Th fontWeight="bold" color="teal.700">Value</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Object.entries(activeCategory.data).map(([key, value], idx) => (
                      <Tr key={idx}>
                        <Td>{key}</Td>
                        <Td>{value}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button variant="solid" colorScheme="teal" onClick={onClose} size="sm">
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          
            )}
        </Box>
    );
};

export default MainComponent;
