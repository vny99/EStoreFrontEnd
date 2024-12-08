import { Product } from "../../models/Product";
import { ProductActionTypes } from "../actions/Actions";
import { FETCH_PRODUCT_BY_ID, FETCH_PRODUCT_BY_ID_FAILED, FETCH_PRODUCT_BY_ID_SUCCESS } from "../actions/ActionTypes";

interface state{
    error: string;
    loading: boolean;
    product: Product;
}

const initialState: state = {
    error: "",
    loading: false,
    product: {} as Product,
};

export const getProductByIdReducer = (state = initialState, action: ProductActionTypes) => {
    switch (action.type) {
        case FETCH_PRODUCT_BY_ID:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        case FETCH_PRODUCT_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}