export const movieReducer = (state, action) => {
  switch (action.type) {
    case "set_movies":
      return { ...state, movies: action.payload };
    case "set_watchlist":
      return { ...state, watchlist: action.payload };
    case "set_stared":
      return { ...state, stared: action.payload };
    default:
      return state;
  }
};
