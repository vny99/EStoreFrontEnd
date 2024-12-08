import { Product } from "../../models/Product";
import { ProductActionTypes } from "../actions/Actions";
import { FETCH_PRODUCT_BY_SKU, FETCH_PRODUCT_BY_SKU_FAILED, FETCH_PRODUCT_BY_SKU_SUCCESS } from "../actions/ActionTypes";

interface state {
    error: string;
    loading: boolean;
    product: Product;
}

const initialState: state = {
    error: "",
    loading: false,
    product: {} as Product,
};

export const getProductBySkuReducer = (state = initialState, action: ProductActionTypes) => {
    switch (action.type) {
        case FETCH_PRODUCT_BY_SKU:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCT_BY_SKU_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        case FETCH_PRODUCT_BY_SKU_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};