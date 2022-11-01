import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { NavBar, SubMenu } from "../organism";
import { Controllers } from "../atoms";
import { CardList } from "../template/CardList";

export const Home = () => {
  return (
    <>
      <NavBar />
      <SubMenu />
      <CardList />
      <Box py="10">
        <Controllers />
      </Box>
    </>
  );
};
