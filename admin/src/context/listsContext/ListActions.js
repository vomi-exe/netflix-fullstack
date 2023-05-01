export const getListsStart = () => ({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (list) => ({
    type: "GET_LISTS_SUCCESS",
    payload: list,
});

export const getListsFaliure = () => ({
    type: "GET_LISTS_FAILURE",
});




export const createListFaliure = () => ({
    type: "CREATE_LIST_FAILURE",
});

export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
});

export const createListStart = () => ({
    type: "CREATE_LIST_START",
});




export const updateListFaliure = () => ({
    type: "UPDATE_LIST_FAILURE",
});

export const updateListSuccess = (list) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: list,
});

export const updateListsStart = () => ({
    type: "UPDATE_LIST_START",
});






export const deleteListsStart = () => ({
    type: "DELETE_LISTS_START",
});

export const deleteListsSuccess = (id) => ({
    type: "DELETE_LISTS_SUCCESS",
    payload: id,
});

export const deleteListsFaliure = () => ({
    type: "DELETE_LISTS_FAILURE",
});
