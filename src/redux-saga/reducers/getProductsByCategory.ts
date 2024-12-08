import { Product } from "../../models/Product";
import { ProductActionTypes } from "../actions/Actions";
import { FETCH_PRODUCTS_BY_CATEGORY, FETCH_PRODUCTS_BY_CATEGORY_FAILED, FETCH_PRODUCTS_BY_CATEGORY_SUCCESS } from "../actions/ActionTypes";

interface state {
    error: string;
    loading: boolean;
    products: Product[];
}

const initialState: state = {
    error: "",
    loading: false,
    products: [],
};

export const getProductsByCategory = (state = initialState, action: ProductActionTypes) => {
    switch (action.type) {
        case FETCH_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case FETCH_PRODUCTS_BY_CATEGORY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}