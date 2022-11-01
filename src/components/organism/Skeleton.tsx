import { Box, SkeletonText, SkeletonCircle, Grid } from "@chakra-ui/react";

export const Skeleton = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} px="32">
      <Box
        w="200px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SkeletonCircle size="20" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box
        w="200px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <SkeletonCircle size="20" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box
        w="200px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <SkeletonCircle size="20" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box
        w="200px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <SkeletonCircle size="20" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box
        w="200px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <SkeletonCircle size="20" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box
        w="200px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <SkeletonCircle size="20" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box
        w="200px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <SkeletonCircle size="20" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </Grid>
  );
};
