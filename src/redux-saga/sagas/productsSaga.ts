import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { Product } from "../../models/Product";
import { FETCH_PRODUCT_BY_ID, FETCH_PRODUCT_BY_ID_FAILED, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_SKU, FETCH_PRODUCT_BY_SKU_FAILED, FETCH_PRODUCT_BY_SKU_SUCCESS, FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY, FETCH_PRODUCTS_BY_CATEGORY_FAILED, FETCH_PRODUCTS_BY_CATEGORY_SUCCESS, FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_SUCCESS, FETCH_SORTED_PRODUCTS, FETCH_SORTED_PRODUCTS_FAILED, FETCH_SORTED_PRODUCTS_SUCCESS, LOAD_PRODUCTS_TO_DB, LOAD_PRODUCTS_TO_DB_FAILED, LOAD_PRODUCTS_TO_DB_SUCCESS } from "../actions/ActionTypes";
import { AxiosError } from "axios";
import APIResponse from "../../models/APIResponse";
import { ProductsApiService } from "../../api/ProductsApiService";

function* getAllProductsSaga(): Generator<Effect, void, APIResponse<Product[]>>{
    try {
        const response: APIResponse<Product[]> = yield call(ProductsApiService.getProducts);
        
        yield put({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: response.data
        })

        } catch (error: unknown) {
            const e = error as AxiosError;
        yield put({
            type: FETCH_PRODUCTS_FAILED,
            payload: e.message
        })
    }
}

function* getProductByIdSaga(action: { type: string; payload: number }): Generator<Effect, void, APIResponse<Product>>{
    try {
        const response = yield call(ProductsApiService.getProductById, action.payload);
        
        yield put({
            type: FETCH_PRODUCT_BY_ID_SUCCESS,
            payload: response.data
        })

        } catch (error) {
            const e = error as AxiosError;
        yield put({
            type: FETCH_PRODUCT_BY_ID_FAILED,
            payload: e.message
        })
    }
}

function* getProductsByCategorySaga(action: { type: string; payload: string }): Generator<Effect, void, APIResponse<Product[]>>{
    try {
        const response = yield call(ProductsApiService.getProductsByCategory, action.payload);
        
        yield put({
            type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
            payload: response.data
        })

        } catch (error) {
            const e = error as AxiosError;
        yield put({
            type: FETCH_PRODUCTS_BY_CATEGORY_FAILED,
            payload: e.message
        })
    }
}

function* getProductBySkuSaga(action: { type: string; payload: string }): Generator<Effect, void, APIResponse<Product>>{
    try {
        const response = yield call(ProductsApiService.getProductBySku, action.payload);
        
        yield put({
            type: FETCH_PRODUCT_BY_SKU_SUCCESS,
            payload: response.data
        })

        } catch (error) {
            const e = error as AxiosError;
        yield put({
            type: FETCH_PRODUCT_BY_SKU_FAILED,
            payload: e.message
        })
    }
}

function* getSortedProductsSaga(action: { type: string; payload: string }): Generator<Effect, void, APIResponse<Product[]>>{
    try {
        const response = yield call(ProductsApiService.sortProductsByPrice, action.payload);
        
        yield put({
            type: FETCH_SORTED_PRODUCTS_SUCCESS,
            payload: response.data
        })

        } catch (error) {
          const e =  error as AxiosError;
        yield put({
            type: FETCH_SORTED_PRODUCTS_FAILED,
            payload: e.message
        })
    }
}

function* loadProductsToDbSaga(): Generator<Effect, void, void>{
    try {
        yield call(ProductsApiService.loadProductsToDb);
       
        yield put({
            type: LOAD_PRODUCTS_TO_DB_SUCCESS,
        })

        } catch (error: unknown) {
            const e = error as AxiosError;
        yield put({
            type: LOAD_PRODUCTS_TO_DB_FAILED,
            payload: e.message
        })
    }
}

export function* productsSaga(): Generator<Effect, void, void> {
    yield takeEvery(FETCH_PRODUCTS, getAllProductsSaga);
    yield takeEvery(FETCH_PRODUCT_BY_ID, getProductByIdSaga);
    yield takeEvery(FETCH_PRODUCTS_BY_CATEGORY, getProductsByCategorySaga);
    yield takeEvery(FETCH_PRODUCT_BY_SKU, getProductBySkuSaga);
    yield takeEvery(FETCH_SORTED_PRODUCTS, getSortedProductsSaga);
    yield takeEvery(LOAD_PRODUCTS_TO_DB, loadProductsToDbSaga);
}