import React, { useEffect, useState } from 'react';
import Category from '../../Layouts/category';
import CategorySecondary from '../../Layouts/categorySecondary';
import Header from '../../Layouts/header';
import Product from '../../common/shared/product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/product.actions';
import { ProductGroupTS, ProductTS } from './product';
import Logger from '../../common/utils/Logger';
import Loader from '../../common/shared/Loader';

const Homescreen = React.memo(() => {
  let dispatch = useDispatch();
  let productList = useSelector((state: ProductGroupTS) => state.allProducts.productList)
  let selectedFilter = useSelector((state: ProductGroupTS) => state.allProducts.selectedFilter)

  const [productListState, setproductListState] = useState(productList)

  useEffect((): void => {
    if (!productList) {
      dispatch(fetchPosts());
    }
  }, [dispatch, productList]);
  Logger("__success__",productListState).log()
  Logger("!warn",productListState).warn()
  useEffect(() => {
    switch (selectedFilter) {
      case "Price : Low to high":
        let sortHL = productListState.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
        setproductListState(sortHL)

        break;
      case "Price : High to low":
        let sortLH = productListState.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        setproductListState(sortLH)
        break
      case "Avg. customer review":
        let rating = productListState.sort((a, b) => (a.rating.rate < b.rating.rate) ? 1 : ((b.rating.rate < a.rating.rate) ? -1 : 0))
        setproductListState(rating)
        break
      case "Newest arrivals":
        setproductListState(productListState)
        break
      default:
        setproductListState(productListState)
        break;
    }

  }, [selectedFilter, productListState])

  return (
    <div className="homescreen-wrapper">
      <Loader/>
      <Header />
      <Category />
      <CategorySecondary />
      <div className="product-main">
        {productListState ? (
          productListState.map((product: ProductTS) => (
            <div className='d-flex-column'>
              <Product key={product.id} product={product} />
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
});
export default Homescreen;
