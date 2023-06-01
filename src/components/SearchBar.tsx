import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface Props {
  handleClick: () => void;
}

const SearchBar = ({ handleClick }: Props) => {
  return (
    <InputGroup size="lg">
      <Input placeholder="Event search" width={"lg"} />;
      <InputRightElement width="4.5rem">
        <Button size="md" onClick={handleClick}>
          Suchen
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
