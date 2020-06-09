const INIT = {
  favorite: [],
};

export const weatherReducer = (state = INIT, { type, payload }) => {
  switch (type) {
    case "ONE":
      return { ...state };
    default:
      return { ...state };
  }
};
