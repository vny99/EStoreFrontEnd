import { ProductActionTypes } from "../actions/Actions";
import { LOAD_PRODUCTS_TO_DB, LOAD_PRODUCTS_TO_DB_FAILED, LOAD_PRODUCTS_TO_DB_SUCCESS } from "../actions/ActionTypes";

interface state{
    error: string;
    loading: boolean;
    msg: string;
}

const initialState: state = {
    error: "",
    loading: false,
    msg: "",
};

export const loadAllProductsReducer = (state = initialState, action: ProductActionTypes) => {
    switch (action.type) {
        case LOAD_PRODUCTS_TO_DB:
            return {
                ...state,
                loading: true,
            };
        case LOAD_PRODUCTS_TO_DB_SUCCESS:
            return {
                ...state,
                loading: false,
                msg: action.payload,
            };
        case LOAD_PRODUCTS_TO_DB_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

