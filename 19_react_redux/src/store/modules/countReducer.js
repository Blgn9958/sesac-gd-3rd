const initialState = 0;

export const counterMinus = () => ({ type: "count/decrement" });
console.log(counterMinus()); // { type: "decrement" } 콘솔에 찍힘
// dispatch(counterMinus()) == dispatch({ type: "decrement"})

//  {type: "increament"} reset 전달하는 액션 타입 정의하기
export const counterPlus = () => ({ type: "count/increment" });

//  {type: "reset"}
export const counterRest = () => ({ type: "count/reset" });

// 리듀서 작성
export const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case "count/increment"
        return state + 1;
        
    }
};
