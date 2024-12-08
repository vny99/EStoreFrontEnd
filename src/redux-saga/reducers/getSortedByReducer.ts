import { Product } from "../../models/Product";
import { ProductActionTypes } from "../actions/Actions";
import { FETCH_SORTED_PRODUCTS, FETCH_SORTED_PRODUCTS_FAILED, FETCH_SORTED_PRODUCTS_SUCCESS } from "../actions/ActionTypes";

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

export const getSortedProductsReducer = (state = initialState, action: ProductActionTypes) => {
    switch (action.type) {
        case FETCH_SORTED_PRODUCTS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SORTED_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case FETCH_SORTED_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};