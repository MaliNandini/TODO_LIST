export const Add_Todo = (data) => {
  return {
    type: "Add",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "Delete",
    id,
  };
};

export const clearAll = () => {
  return {
    type: "ClearAll",
  };
};
