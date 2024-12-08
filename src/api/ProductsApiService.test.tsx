import axios from 'axios';
import { Product } from '../models/Product';
import APIResponse from '../models/APIResponse';
import { ProductsApiService } from './ProductsApiService';

const product: Product = {
    id: 5,
    title: "Red Nail Polish",
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    discountPercentage: 2.46,
    rating: 3.91,
    stock: 71,
    tags: ["beauty", "nail polish"],
    brand: "Nail Couture",
    sku: "YUIIIP4W",
    weight: 9,
    dimensions: {
        width: 8.11,
        height: 10.89,
        depth: 29.06,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 week",
    availabilityStatus: "In Stock",
    reviews: [
        {
            rating: 5.0,
            comment: "Very pleased!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Leo Rivera",
            reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
            rating: 5.0,
            comment: "Great product!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Evan Reed",
            reviewerEmail: "evan.reed@x.dummyjson.com",
        },
        {
            rating: 4.0,
            comment: "Highly recommended!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Evelyn Sanchez",
            reviewerEmail: "evelyn.sanchez@x.dummyjson.com",
        },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 46,
    meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "3212847902461",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
};

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ProductsApiService', () => {
  const mockApiResponse: APIResponse<Product[]> = {
    status: 'success',
    message: 'Products retrieved successfully',
    data: [product],
  };

  const mockApiResponseProduct: APIResponse<Product> = {
    status: 'success',
    message: 'Product retrieved successfully',
    data: product,
  };

  it('should fetch all products', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockApiResponse });

    const result = await ProductsApiService.getProducts();

    expect(result).toEqual(mockApiResponse);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/api/products');
  });

  it('should fetch a product by ID', async () => {
    const productId = 1;
    mockedAxios.get.mockResolvedValue({ data: mockApiResponseProduct });

    const result = await ProductsApiService.getProductById(productId);

    expect(result).toEqual(mockApiResponseProduct);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/api/products/1');
  });

  it('should fetch products by category', async () => {
    const category = 'electronics';
    mockedAxios.get.mockResolvedValue({ data: mockApiResponse });

    const result = await ProductsApiService.getProductsByCategory(category);

    expect(result).toEqual(mockApiResponse);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/api/products/category/electronics');
  });

  it('should fetch a product by SKU', async () => {
    const sku = '123-abc';
    mockedAxios.get.mockResolvedValue({ data: mockApiResponseProduct });

    const result = await ProductsApiService.getProductBySku(sku);

    expect(result).toEqual(mockApiResponseProduct);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/api/products/sku/123-abc');
  });

  it('should sort products by price', async () => {
    const order = 'asc';
    mockedAxios.get.mockResolvedValue({ data: mockApiResponse });

    const result = await ProductsApiService.sortProductsByPrice(order);

    expect(result).toEqual(mockApiResponse);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/api/products/sort/asc');
  });

  it('should load products to the database', async () => {
    const mockLoadResponse: APIResponse<string> = {
      status: 'success',
      message: 'Products loaded successfully',
      data: 'Operation successful',
    };
    mockedAxios.post.mockResolvedValue({ data: mockLoadResponse });

    const result = await ProductsApiService.loadProductsToDb();

    expect(result).toEqual(mockLoadResponse);
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:8080/api/products/load');
  });

  it('should handle error when loading products', async () => {
    const errorMessage = 'Failed to load products';
    mockedAxios.post.mockRejectedValue(new Error(errorMessage));

    await expect(ProductsApiService.loadProductsToDb()).rejects.toThrow(errorMessage);
  });
});
