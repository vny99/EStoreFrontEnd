import React, { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../../redux-saga/store/Store';
import { useDispatch } from 'react-redux';
import { Product } from '../../models/Product';
import { useSelector } from 'react-redux';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY, FETCH_SORTED_PRODUCTS } from '../../redux-saga/actions/ActionTypes';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [categorySelected, setCategorySelected] = useState<string>('');
    const [sorted, setSorted] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const productsFromStore: Product[] = useSelector((state: RootState) => state.getAllProducts.products);
    const loadingFromStore: boolean = useSelector((state: RootState) => state.getAllProducts.loading);
    const errorFromStore: string = useSelector((state: RootState) => state.getAllProducts.error);
    const productsByCategoryFromStore: Product[] = useSelector((state: RootState) => state.getProductsByCategory.products);
    const loadingByCategoryFromStore: boolean = useSelector((state: RootState) => state.getProductsByCategory.loading);
    const errorByCategoryFromStore: string = useSelector((state: RootState) => state.getProductsByCategory.error);
    const sortedProductsFromStore: Product[] = useSelector((state: RootState) => state.getSortedProducts.products);
    const loadingSortedFromStore: boolean = useSelector((state: RootState) => state.getSortedProducts.loading);
    const errorSortedFromStore: string = useSelector((state: RootState) => state.getSortedProducts.error);


    useEffect(() => {

        if (categorySelected !== '' && sorted !== '') {
            setProducts(
                sortedProductsFromStore.filter((product: Product) => product.category === categorySelected)
            )
            setLoading(loadingSortedFromStore);
            setError(errorSortedFromStore);
        }
        else if (categorySelected !== '') {
            setProducts(productsByCategoryFromStore);
            setLoading(loadingByCategoryFromStore);
            setError(errorByCategoryFromStore);
        }
        else if (sorted !== '') {
            setProducts(sortedProductsFromStore);
            setLoading(loadingSortedFromStore);
            setError(errorSortedFromStore);
        }
        else {
            setProducts(productsFromStore);
            setLoading(loadingFromStore);
            setError(errorFromStore);
            productsFromStore.forEach((product: Product) => {
                setCategories((prevCategories) => {
                    if (!prevCategories.includes(product.category)) {
                        return [...prevCategories, product.category];
                    }
                    return prevCategories;
                });
            });
        }
    }, [productsFromStore, loadingFromStore, errorFromStore, productsByCategoryFromStore, loadingByCategoryFromStore, errorByCategoryFromStore, sortedProductsFromStore, loadingSortedFromStore, errorSortedFromStore]);

    const filterByCategory = (category: string) => {
        setCategorySelected(category);
        dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY, payload: category });
    }

    const sortByPrice = (order: string) => {
        setSorted(order);
        dispatch({ type: FETCH_SORTED_PRODUCTS, payload: order });
    }

    const removeFilters = () => {
        setCategorySelected('');
        setSorted('');
        dispatch({ type: FETCH_PRODUCTS });
    }

    const Loading = () => {
        return (
            <>loading......</>
        );
    }

    const Error = () => {
        return (
            <>error......</>
        );
    }

    const ShowProducts = () => {
        return (<>
            <div className="buttons d-flex justify-content-center ">
                {Array.isArray(categories) && categories.length > 0 && (
                    categories.map((category: string) => {
                        return (
                            <button
                                key={category}
                                className={`btn me-2 text-uppercase ${categorySelected === category ? 'btn-dark' : 'btn-outline-dark'}`}
                                onClick={() => filterByCategory(category)}
                            >
                                {' '}
                                {category}{' '}
                            </button>
                        )
                    })
                )
                }
                <div className="dropdown">
                    <button
                        className="btn btn-outline-dark dropdown-toggle me-2 custom-dropdown-button text-uppercase"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Sort by Price
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <button
                                className={`dropdown-item text-uppercase ${sorted === 'asc' ? 'active' : ''}`}
                                onClick={() => sortByPrice('asc')}
                            >
                                Ascending
                            </button>
                        </li>
                        <li>
                            <button
                                className={`dropdown-item text-uppercase ${sorted === 'dsc' ? 'active' : ''}`}
                                onClick={() => sortByPrice('desc')}
                            >
                                Descending
                            </button>
                        </li>
                    </ul>
                </div>
                <button
                    className='btn btn-outline-dark text-uppercase'
                    onClick={() => removeFilters()}
                >
                    {' '}
                    Clear Filters{' '}
                </button>
            </div>
            <div className="container my-4 py-4">
                <div className="row">
                    <div className="row justify-content-center">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={product.id}>
                                    <div className="card h-100">
                                        <div className="product-image-container">
                                            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                            {product.discountPercentage && (
                                                <span className="discount-badge">
                                                    {`-${product.discountPercentage}%`}
                                                </span>
                                            )}
                                        </div>

                                        <div className="card-body d-flex flex-column">
                                            {product.brand && (
                                                <h6
                                                    className="text-uppercase"
                                                    style={{
                                                        color: "#6c757d",
                                                        fontWeight: "600",
                                                        fontSize: "0.9rem",
                                                        marginBottom: "0.5rem"
                                                    }}
                                                >
                                                    {product.brand}
                                                </h6>
                                            )}

                                            {/* Title */}
                                            <h5 className="card-title product-title" style={{ marginTop: "0.2rem" }}>
                                                {product.title}
                                            </h5>
                                            <div className="price-status-container mt-3">
                                                <div className="product-price">
                                                    ${product.price}
                                                </div>
                                                <div className="mt-auto">
                                                    {product.availabilityStatus || 'Not available'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center">
                                            <Link to={`/product/${product.sku}`} className="btn btn-outline-dark w-100 ">
                                                View Product
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No products available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>)
    }

    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    <hr />
                </div>
                <div className="row justify-content-center">
                    {loading ? (
                        <div className="col-12 text-center">
                            <Loading />
                        </div>
                    ) : error ? (
                        <div className="col-12 text-center">
                            <Error />
                        </div>
                    ) : (
                        <ShowProducts />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductList;