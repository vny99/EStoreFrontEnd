import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
 import { useSelector } from 'react-redux';
import ProductDetail from './ProductDetail';
import createSagaMiddleware from 'redux-saga';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { RootState } from '../../redux-saga/store/Store';
import React from 'react';
import { Product } from '../../models/Product';

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


const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore<RootState>([sagaMiddleware]);

const initialState: RootState = {
    getAllProducts: {
      products: [],
      loading: false,
      error: 'Failed to load products',
    },
    getProductById: {
      product: product,
      loading: false,
      error: 'Failed to load product',
    },
    getProductBySku: {
      product: product,
      loading: false,
      error: 'Failed to load product',
    },
    getProductsByCategory: {
      products: [],
      loading: false,
      error: 'Failed to load products',
    },
    getSortedProducts: {
      products: [],
      loading: false,
      error: 'Failed to load products',
    },
    loadProducts: {
      loading: false,
      error: 'Failed to load products',
      msg: 'Failed to load products',
    },
  };

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

let store: MockStoreEnhanced<RootState>;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
});

test('renders loading state', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue({
        product: null,
        loading: true,
        error: '',
      });
  render(
    <Provider store={store}>
      <ProductDetail />
    </Provider>
  );

  expect(screen.getByText('loading......')).toBeInTheDocument();
});

test('renders error state', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue({
        product: null,
        loading: false,
        error: 'Something went wrong!',
      });
  
    render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
  
    expect(screen.getByText('error......')).toBeInTheDocument();
  });
  