import { RiShoppingCartLine } from "react-icons/ri";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo-regular.png";

const Navbar = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((acc, cur) => acc + cur.count, 0);
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <SearchInput />
      <Link className="navbar__btn" to="/home">
        Shop
      </Link>
      <Link className="navbar__btn" to="/cart">
        <button className="cart-btn">
          ${totalPrice}
          <RiShoppingCartLine />({totalCount})
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
