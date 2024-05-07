const initialState = {
  favouriteCompany: {
    content: [],
  },
};

const favouriteCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          content: state.favouriteCompany.content.concat(action.payload),
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          content: state.favouriteCompany.content.filter((company) => company !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default favouriteCompanyReducer;
