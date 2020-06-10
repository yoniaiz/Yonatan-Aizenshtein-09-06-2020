const INIT = {
  loading: false,
  pageLoader: false,
};

export const uiReducer = (state = INIT, { type, payload }) => {
  switch (type) {
    case "ONE":
      return { ...state };
    default:
      return { ...state };
  }
};
