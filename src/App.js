import "./App.css";
import Todo from "./Components/Todo";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
    <Center >
      <Box borderRadius="8px" mt="200px" style={{backgroundColor:"white"}}>
        <Todo />
      </Box>
    </Center>
    </div>
  );
}

export default App;
