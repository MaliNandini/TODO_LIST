import React, { useState } from "react";
import { Input, Button, Box, VStack, HStack, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Action";
import { Add_Todo } from "../Redux/Action";

import { clearAll } from "../Redux/Action";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

function Todo() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.listItem);

  return (
    <Box p="20px" h="auto" w="600px">
      <VStack>
        <Box>
          <Heading>To-Do List</Heading>
        </Box>

        {/* input Feild */}
        <Box>
          <HStack mt="20px">
            <Input
              type="text"
              id="form12"
              placeholder="Add items.."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              w="500px"
            />
            {inputData && (
              <Button>
                <FaPlus
                  onClick={() =>
                    dispatch(Add_Todo(inputData), setInputData(""))
                  }
                />
              </Button>
            )}
          </HStack>
        </Box>

        {/* Show items */}
        <Box>
          {list.map((item) => {
            return (
              <>
                <Box border="1px solide gray">
                  <HStack key={item.id} spacing={5}>
                    <Input
                      value={item.data}
                      type="text"
                      onChange={(e) => setInputData(e.target.value)}
                    />
                    <Button>
                      <FaTrashAlt
                        onClick={() => dispatch(deleteTodo(item.id))}
                      />
                    </Button>
                  </HStack>
                </Box>
              </>
            );
          })}
        </Box>

        {/* clear all items */}
        <Box>
          <Button type="button" onClick={() => dispatch(clearAll())}>
            Clear All
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default Todo;
