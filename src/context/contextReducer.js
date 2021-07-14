export const initialState = {
    pageId: "allContacts",
    params: {},
};

const contextReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGE":
            return { ...state, pageId: action.payload };
        case "SET_PARAMS":
            return { ...state, params: action.payload };
        default:
            return state;
    }
};

export default contextReducer;
