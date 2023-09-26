import Logo from '../assets/PngItem_12080.png';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import flag from '../assets/Flag_of_India.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  let dataCount = useSelector((state) => state.allProducts.cartList)
  let userData = useSelector((state) => state.allProducts.useDetails)
  return (
    <div className="header-wrapper">
      <div className="nav__logo">
        <Link to={"/"}>
          <img src={Logo} alt="amazon-logo" />
        </Link>
      </div>
      <div className="nav__address d-flex-row">
        <IconContext.Provider value={{ color: 'white', className: 'global-class-name' }}>
          <CiLocationOn />
        </IconContext.Provider>
        <div className="nav__deliver-address">
          {userData?.city ?
            <>
              <p className="text-small text-grey">Deliver to {userData ? userData["First Name"] : null}</p>
              <h5 className="text-medium">{`${userData?.city} ${userData?.Zipcode}`}</h5>
            </> :
            <h5 className="text-medium">{"  "}Deliver to this address</h5>
          }
        </div>
      </div>
      <span className="nav__search d-flex-row d-flex-stretch">
        <input type="text" />
        <button>
          <IconContext.Provider value={{ size: '25px', className: 'global-class-name' }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </button>
      </span>
      <div className="nav__country d-flex-row ">
        <div className="flg">
          <img src={flag} alt="flag" />
        </div>
        <div className="d-flex-row">
          <h5>EN</h5>
          <MdOutlineArrowDropDown />
        </div>
      </div>
      <div className="nav__account">
        <Link to={"/register"}>
          <p className="text-small">Hello, {userData ? userData["First Name"] : "Sign in"}</p>
          <h5 className="text-medium">Account & Lists</h5>
        </Link>
      </div>
      <div className="nav__return-orders">
        <div className="nav__account">
          <p className="text-small">Return</p>
          <h5 className="text-medium">& orders</h5>
        </div>
      </div>
      <div className="nav__cart" data-carCount={dataCount?.length}>
        <Link to={'/cart'}>
          <IconContext.Provider value={{ size: '28px', className: 'global-class-name' }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
        </Link>
      </div>
    </div>
  );
};
export default Header;
