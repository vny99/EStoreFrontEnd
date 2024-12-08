import { Product } from "../../models/Product";
import { FETCH_PRODUCT_BY_ID, FETCH_PRODUCT_BY_ID_FAILED, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_SKU, FETCH_PRODUCT_BY_SKU_FAILED, FETCH_PRODUCT_BY_SKU_SUCCESS, FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY, FETCH_PRODUCTS_BY_CATEGORY_FAILED, FETCH_PRODUCTS_BY_CATEGORY_SUCCESS, FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_SUCCESS, FETCH_SORTED_PRODUCTS, FETCH_SORTED_PRODUCTS_FAILED, FETCH_SORTED_PRODUCTS_SUCCESS, LOAD_PRODUCTS_TO_DB, LOAD_PRODUCTS_TO_DB_FAILED, LOAD_PRODUCTS_TO_DB_SUCCESS } from "./ActionTypes";

interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailedAction {
  type: typeof FETCH_PRODUCTS_FAILED;
  payload: string;
}

interface FetchProductByIdAction {
  type: typeof FETCH_PRODUCT_BY_ID;
  payload: string;
}

interface FetchProductByIdSuccessAction {
  type: typeof FETCH_PRODUCT_BY_ID_SUCCESS;
  payload: Product;
}

interface FetchProductByIdFailedAction {
  type: typeof FETCH_PRODUCT_BY_ID_FAILED;
  payload: string;
}

interface FetchProductBySkuAction {
  type: typeof FETCH_PRODUCT_BY_SKU;
  payload: string;
}

interface FetchProductBySkuSuccessAction {
  type: typeof FETCH_PRODUCT_BY_SKU_SUCCESS;
  payload: Product;
}

interface FetchProductBySkuFailedAction {
  type: typeof FETCH_PRODUCT_BY_SKU_FAILED;
  payload: string;
}

interface FetchProductsByCategoryAction {
  type: typeof FETCH_PRODUCTS_BY_CATEGORY;
  payload: string;
}

interface FetchProductsByCategorySuccessAction {
  type: typeof FETCH_PRODUCTS_BY_CATEGORY_SUCCESS;
  payload: Product[];
}

interface FetchProductsByCategoryFailedAction {
  type: typeof FETCH_PRODUCTS_BY_CATEGORY_FAILED;
  payload: string;
}

interface FetchSortedProductsAction {
  type: typeof FETCH_SORTED_PRODUCTS;
  payload: string;
}

interface FetchSortedProductsSuccessAction {
  type: typeof FETCH_SORTED_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchSortedProductsFailedAction {
  type: typeof FETCH_SORTED_PRODUCTS_FAILED;
  payload: string;
}

interface LoadProductsToDbAction {
  type: typeof LOAD_PRODUCTS_TO_DB;
}

interface LoadProductsToDbSuccessAction {
  type: typeof LOAD_PRODUCTS_TO_DB_SUCCESS;
  payload: string;
}

interface LoadProductsToDbFailedAction {
  type: typeof LOAD_PRODUCTS_TO_DB_FAILED;
  payload: string;
}

export type ProductActionTypes = FetchProductsAction | FetchProductsSuccessAction | FetchProductsFailedAction | FetchProductByIdAction | FetchProductByIdSuccessAction | FetchProductByIdFailedAction | FetchProductBySkuAction | FetchProductBySkuSuccessAction | FetchProductBySkuFailedAction | FetchProductsByCategoryAction | FetchProductsByCategorySuccessAction | FetchProductsByCategoryFailedAction | FetchSortedProductsAction | FetchSortedProductsSuccessAction | FetchSortedProductsFailedAction | LoadProductsToDbAction | LoadProductsToDbSuccessAction | LoadProductsToDbFailedAction;