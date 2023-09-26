import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Layouts/header';
import { addToCart, removeCart } from '../../redux/actions/product.actions';

const ProductDetails = () => {
  let product = useSelector((state) => state.allProducts.selectedProduct);
  let cartList = useSelector((state) => state.allProducts.cartList);
  let dispatch = useDispatch()
  return (
    <>
      <Header />
      <div className="product__details-wrapper">
        <div className="product__details-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product__details-information">
          <h1>{product.title}</h1>
          <h3>{product.price}</h3>
          <h4>{product.category.toUpperCase()}</h4>
          <p>{product.description}</p>
          {cartList?.includes(product)? <button className='product-button2' onClick={()=> dispatch(removeCart(product)) }>Remove from Cart</button> : <button onClick={()=> dispatch(addToCart(product))} className='product-button'>Add to cart</button> }
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
