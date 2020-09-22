export const initialState = {
  user: null,
};

const reducer = (state, action) => {

  // action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
