import axios from "axios";
import { Product } from "../models/Product";
import APIResponse from "../models/APIResponse";

const BASE_URL = "http://localhost:8080/api/products";

export class ProductsApiService {

    private static async makeGetRequest<T>(url: string): Promise<APIResponse<T>> {
            const response = await axios.get<APIResponse<T>>(url);
            return response.data; 
    }

    public static async getProducts(): Promise<APIResponse<Product[]>> {
            return ProductsApiService.makeGetRequest<Product[]>(BASE_URL);
    }

    public static async getProductById(id: number): Promise<APIResponse<Product>> {
        return ProductsApiService.makeGetRequest<Product>(`${BASE_URL}/${id}`);
    }

    public static async getProductsByCategory(category: string): Promise<APIResponse<Product[]>> {
        return ProductsApiService.makeGetRequest<Product[]>(`${BASE_URL}/category/${category}`);
    }

    public static async getProductBySku(sku: string): Promise<APIResponse<Product>> {
        return ProductsApiService.makeGetRequest<Product>(`${BASE_URL}/sku/${sku}`);
    }

    public static async sortProductsByPrice(order: string): Promise<APIResponse<Product[]>> {
        return ProductsApiService.makeGetRequest<Product[]>(`${BASE_URL}/sort/${order}`);
    }

    public static async loadProductsToDb(): Promise<APIResponse<string>> {
            const response = await axios.post<APIResponse<string>>(`${BASE_URL}/load`);
            return {
                status: response.data.status,
                message: response.data.message,
                data: response.data.data
            };        
    }
}
