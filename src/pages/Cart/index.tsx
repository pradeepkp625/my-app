import { useSelector } from "react-redux";
import Product from "../../common/shared/product";
import Header from "../../Layouts/header";
import { ProductGroupTS, ProductTS } from "../Home/product";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  let cartList = useSelector((state: ProductGroupTS) => state.allProducts.cartList)
  const [totalCartAmount, setTotalCartAmount] = useState(0)

  useEffect(() => {
    let sumOfPrice = 0
    cartList.forEach(element => {
      sumOfPrice = sumOfPrice + (element.price)
    });
    setTotalCartAmount(sumOfPrice)
  }, [totalCartAmount])

  return <div>
    <Header />
    {cartList.length > 0 ?
      <>
        <div className="product-main">
          {cartList.map((product: ProductTS) => (
            <div className='d-flex-column'>
              <Product key={product.id} product={product} />
            </div>
          ))
          }
        </div>;
        <center>
          <button className="product-button">{`Proceed to checkout (Total : ₹${totalCartAmount})`}</button>
        </center>
      </> :
      <center>
        <div className="empty__car-msg">
          <IconContext.Provider value={{ size: '50px', className: 'global-class-name' }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
          <p>{`Your Cart is empty`}</p>
        </div>
      </center>

    }
  </div>
};
export default Cart;
