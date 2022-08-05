import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL
} from "./actionTypes";
const initailState = {
  items: [],
  name: "item",
  isLoading: false,
  error: ""
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ITEMS_SUCCESS:
      let ItemsArray = [...state.items, action.payload];
      return {
        items: ItemsArray,
        isLoading: false
      };
    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
