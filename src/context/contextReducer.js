export const initialState = {
    pageId: "contactBook",
    tableId: "allContacts",
    params: { name: "All contacts" },
};

const contextReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGE":
            return { ...state, pageId: action.payload };
        case "SET_TABLE":
            return { ...state, tableId: action.payload };
        case "SET_PARAMS":
            return { ...state, params: action.payload };
        default:
            return state;
    }
};

export default contextReducer;
