import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL
} from "./actionTypes";
import axios from "axios";

export const fetchItems = () => {
  return {
    type: FETCH_ITEMS_REQUEST
  };
};
export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items
  };
};
export const fetchFail = (error) => {
  return {
    type: FETCH_ITEMS_FAIL,
    payload: error
  };
};

export const fetchingItems = () => {
  return function (dispatch) {
    dispatch(fetchItems());
    axios.get("https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=84b2c51e-1b33-443d-8470-a7ca9cc22d82")
      .then((response) => {
        console.log(response.data);
        let items = response.data;
        dispatch(fetchItemsSuccess(items));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};
