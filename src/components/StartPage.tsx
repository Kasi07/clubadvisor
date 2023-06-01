import { Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const StartPage = () => {
  const sendSearch = () => {};
  return (
    <>
      <NavBar />
      <Flex
        direction="column"
        justify="center"
        align="center"
        flex="1"
        flexGrow={1}
        flexShrink={0}
      >
        <SearchBar handleClick={sendSearch} />
      </Flex>
    </>
  );
};

export default StartPage;
