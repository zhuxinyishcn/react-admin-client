// This is an module (actions creator factory)that contain actions
import { INCREMENT, DECREMENT } from "./action-types";
export const increment = (number) => ({ type: INCREMENT, data: number });

export const decrement = (number) => ({ type: DECREMENT, data: number });
/*
 * Asynchronous function with redux thunk return a object
 */
export const incrementAsync = (number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(number));
    }, 1000);
  };
};
