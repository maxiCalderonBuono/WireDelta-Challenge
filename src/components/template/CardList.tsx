import { Grid, GridItem } from "@chakra-ui/react";
import { Card } from "../organism/Card";
import { Skeleton } from "../organism/Skeleton";

export const CardList = () => {
  const isLoading: boolean = false;
  return isLoading ? (
    <Skeleton />
  ) : (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} px="32">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};
