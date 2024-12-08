import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './redux-saga/store/Store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FETCH_PRODUCTS, LOAD_PRODUCTS_TO_DB } from './redux-saga/actions/ActionTypes'
function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector((state: RootState) => state.getAllProducts);

  const  loadingOfLoading: boolean = useSelector((state: RootState) => state.loadProducts.loading);

  const [loadedProducts, setLoadingProducts] = useState<boolean>(false);

  useEffect(() => {
    if (products.length === 0 && !loading) {
      dispatch({ type: FETCH_PRODUCTS });
    } 
  }, [dispatch, loadingOfLoading]);

  useEffect(() => {
    if (products.length === 0 && !loading && !loadedProducts) {
      setLoadingProducts(true);
      dispatch({ type: LOAD_PRODUCTS_TO_DB });
    }
  }, [products, dispatch]);

  if (loading || loadingOfLoading) {
    return (
      <div className="loading-screen">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <p>Error loading products: {error}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:sku" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}



export default App
