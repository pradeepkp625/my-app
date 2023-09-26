import { useDispatch, useSelector } from 'react-redux';
import Rating from './rating';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';
import { addToCart, removeCart, selectedProduct } from '../../redux/actions/product.actions';
import { ProductGroupTS } from '../../pages/Home/product';

const Product = React.memo(({ product }) => {
  let dercription = product.description;
  let dispatch = useDispatch()
  let cartList = useSelector((state: ProductGroupTS) => state.allProducts.cartList)
  const setSelectedProduct = () => {
    dispatch(selectedProduct(product));
  };

  const removeProduct = useCallback(() => {
    dispatch(removeCart(product))
  }, [dispatch, product])

  const addProduct = useCallback(() => {
    dispatch(addToCart(product))
  }, [dispatch, product])

  return (
    <div className="product">
      <Link key={product.id} onClick={() => setSelectedProduct()} to={`/product/${product.title}`}>
        <img src={product.image} alt="" className="product-image" />
        <h3>{product.title}</h3>
        <p className="product-description">{dercription.slice(0, 100)}...</p>
        <Rating rating={product.rating.rate} />
        <div className="tex-greys product-count">
          <div>{product.rating.count}+ people rated this product</div>
        </div>
        <div className="limited-offer">Limited time deal</div>
        <div className="d-flex product-price">
          <h1 style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span>₹</span>
            {product.price + 400}
          </h1>
          <span>
            M.R.P.<span className="underline">{Number(product.price) + 500}</span> {`${' (60% off)'}`}
          </span>
        </div>
      </Link>
      {cartList?.includes(product) ? <button className='product-button2' onClick={() => removeProduct()}>Remove from Cart</button> : <button onClick={() => addProduct()} className='product-button1'>add to cart</button>}

    </div>
  );
});
export default Product;