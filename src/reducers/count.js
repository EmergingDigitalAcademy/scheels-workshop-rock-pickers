function count(state = 0, action) {
    console.log(action);

    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        case "SQUARE":
            return (state * state);
        default:
            return state;
    }
}

export default count;
