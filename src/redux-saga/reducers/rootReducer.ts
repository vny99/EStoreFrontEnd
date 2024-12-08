import { combineReducers } from "@reduxjs/toolkit";
import { getAllProductsReducer } from "./getAllProductsReducer";
import { getProductByIdReducer } from "./getProductByIdReducer";
import { getProductBySkuReducer } from "./getProducBySkuReducer";
import { getProductsByCategory } from "./getProductsByCategory";
import { getSortedProductsReducer } from "./getSortedByReducer";
import { loadAllProductsReducer } from "./loadAllProductsReducer";

const rootReducer = combineReducers({
    getAllProducts: getAllProductsReducer,
    getProductById: getProductByIdReducer,
    getProductBySku: getProductBySkuReducer,
    getProductsByCategory: getProductsByCategory,
    getSortedProducts: getSortedProductsReducer,
    loadProducts: loadAllProductsReducer,
})

export default rootReducer;