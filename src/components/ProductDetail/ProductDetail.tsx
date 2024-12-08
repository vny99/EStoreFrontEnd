import React, { useEffect, useState } from 'react';
import { Product } from '../../models/Product';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux-saga/store/Store';
import { useDispatch } from 'react-redux';
import { FETCH_PRODUCT_BY_SKU } from '../../redux-saga/actions/ActionTypes';
import { useParams } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductDetail.css"

const ProductDetail = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { sku } = useParams<{ sku: string }>();
    const [product, setProduct] = useState<Product>({} as Product);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const productFromStore: Product = useSelector((state: RootState) => state.getProductBySku.product);
    const loadingFromStore: boolean = useSelector((state: RootState) => state.getProductBySku.loading);
    const errorFromStore: string = useSelector((state: RootState) => state.getProductBySku.error);

    useEffect(() => {
        if (sku) {
            dispatch({ type: FETCH_PRODUCT_BY_SKU, payload: sku });
        }
    }, []);

    useEffect(() => {
        setProduct(productFromStore);
        setLoading(loadingFromStore);
        setError(errorFromStore);
        console.log(error, loading, product);
    }, [productFromStore, loadingFromStore, errorFromStore]);

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

    const ShowProduct = () => {
        const [activeTab, setActiveTab] = useState("details");

        const handleTabChange = (tab: string): void => {
            setActiveTab(tab);
        };
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Carousel showThumbs={false} infiniteLoop>
                            {Array.isArray(product.images) ? product.images.map((img, idx) => (
                                <div key={idx}>
                                    <img src={img} alt={product.title}
                                        className="img-fluid"
                                        style={{ maxHeight: '380px', objectFit: 'contain' }}
                                    />
                                </div>
                            )) : []}
                        </Carousel>
                    </div>

                    <div className="col-md-6">
                        <h4 className="text-muted text-uppercase">{product.category}</h4>

                        <p className="lead">
                            Rating: {product.rating ? product.rating : "N/A"}{" "}
                            <i className="fa fa-star" />
                        </p>

                        <h4 className="display-6 fw-bold my-4">{product.price} €</h4>

                        {product.discountPercentage && (
                            <span className="badge bg-danger text-white mb-3">
                                {product.discountPercentage}% Off
                            </span>
                        )}

                        <p className="text-muted">
                            <strong>Status:</strong> {product.availabilityStatus}
                        </p>

                        <p className="text-muted">
                            <strong>Shipping Info:</strong> {product.shippingInformation}
                        </p>

                        <p className="text-muted">
                            <strong>Warranty:</strong> {product.warrantyInformation}
                        </p>

                        <div className="d-flex">
                            {product.dimensions && product.dimensions.width && product.dimensions.height && product.dimensions.depth && (
                                <div className="d-flex">
                                    <p className="text-muted me-4">
                                        <strong>Dimensions:</strong>{" "}
                                        {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`}
                                    </p>
                                </div>
                            )}

                            <p className="text-muted">
                                <strong>Weight:</strong> {product.weight} kg
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "details" ? "active" : ""}`}
                                onClick={() => handleTabChange("details")}
                            >
                                Product Details
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                                onClick={() => handleTabChange("reviews")}
                            >
                                Reviews
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content mt-3">
                        {activeTab === "details" && (
                            <div className="tab-pane fade show active">
                                <h5>Description</h5>
                                <p>{product.description}</p>
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div className="tab-pane fade show active">
                                <div className="mt-4">
                                    <h5>Customer Reviews</h5>
                                    {product.reviews.length > 0 ? (
                                        product.reviews.map((review, idx) => (
                                            <div
                                                key={idx}
                                                className="card mb-3 shadow-sm"
                                                style={{
                                                    marginBottom: "1rem",
                                                    padding: "1rem",
                                                    minBlockSize:"150px"
                                                }}
                                            >
                                                <div className="card-body p-3"> 
                                                    <h6 className="card-title">
                                                        <strong>{review.reviewerName}</strong>{" "}
                                                        <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                                                            - {new Date(review.date).toLocaleDateString()}
                                                        </span>
                                                    </h6>

                                                    <div className="mb-2">
                                                        <strong>Rating: </strong>
                                                        <span>
                                                            {[...Array(5)].map((_, i) => (
                                                                <i
                                                                    key={i}
                                                                    className={`fa fa-star ${i < review.rating ? 'text-warning' : 'text-muted'}`}
                                                                ></i>
                                                            ))}
                                                        </span>
                                                    </div>

                                                    <p className="card-text" style={{ maxHeight: "4rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                        {review.comment}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No reviews available.</p>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {error != '' ? (
                <Error />
            ) : loading ? (
                <Loading />
            ) : (
                <ShowProduct />
            )}
        </div>
    )
}

export default ProductDetail;