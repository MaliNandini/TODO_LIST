const initial = {
  listItem: [],
};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case "Add":
      const { id, data } = action.payload;
      return {
        ...state,
        listItem: [
          ...state.listItem,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "Delete":
      return {
        ...state,

        listItem: state.listItem.filter((elem) => {
          return elem.id !== action.id;
        }),
      };

    case "ClearAll":
      return {
        ...state,

        listItem: [],
      };
    default:
      return state;
  }
};
