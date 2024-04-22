const initialState = 0;

export const deposit = (payload)

export const bankReducer = ((state = initialState), action) => {
    switch (action.type) {
        case "money/deposit":
        return state + action.payload;
        case "money/withdraw":
        return state - action.payload;
        default:
            return state;
    }
};
