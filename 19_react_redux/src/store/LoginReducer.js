const initialState = false;

export const isLoggedinChange = () => ({ type: "isLoggedin/change" });

export const isLoggedinReducer = (state = initialState, action) => {
  if (action.type === "isLoggedin/change") {
    return !state; // true -> false로 false - true로 state 업데이트
  }
  return state;
};
