import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import logo from "../../assets/logo-no-bg.png";
import Products from "../../constants/products";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Map all products to the search bar
  const products = Products.map((product) => ({
    id: product.id,
    name: product.name,
    link: product.link,
    image: product.mainImage,
  }));

  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);

    if (value) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="site-logo navbar-logo"
              />
            </Link>
          </Logo>
          <div className="flex items-center justify-between gap-5 relative">
            {/* Improved Search Bar */}
            <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-500 px-3 py-1 w-[130px] sm:w-[220px]  group focus-within:border-primary transition-all duration-300 ">
              <IoMdSearch className="text-gray-400 mr-2 text-lg" />
              <input
                type="text"
                placeholder="Search products"
                value={searchInput}
                onChange={handleSearchChange}
                className="bg-transparent outline-none w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
                style={{ border: "none", boxShadow: "none" }}
              />
              {/* Show cross mark to clear search */}
              {searchInput && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchInput("");
                    setFilteredProducts([]);
                  }}
                  className="absolute right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
              {/* Render filtered results */}
              {searchInput && filteredProducts.length > 0 && (
                <div className="absolute left-0 top-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto w-full z-10">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={product.link}
                      onClick={() => setSearchInput("")}
                      className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <img
                        src={`../products/${product.image}`}
                        alt={product.name}
                        className="w-10 h-10 mr-3 rounded"
                      />
                      <span className="text-sm">{product.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <MobileMenuButton onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuButton>

            <Navigation isOpen={isMenuOpen}>
              <NavList onClick={toggleMenu}>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact">Contact Us</NavLink>
                </NavItem>
              </NavList>
            </Navigation>
          </div>
        </HeaderContent>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .navbar-logo {
              width: 300px !important;
            }
          }
          @media (max-width: 576px) {
            .navbar-logo {
              width: 150px !important;
            }
          }
        `}
      </style>
      <style>
        {`
          /* shared responsive logo class */
          .site-logo {
            width: 200px;
            height: auto;
            max-width: 100%;
            display: block;
          }

          @media (max-width: 1024px) {
            .site-logo { width: 180px; }
          }
          @media (max-width: 768px) {
            .site-logo { width: 140px; }
          }
          @media (max-width: 576px) {
            .site-logo { width: 110px; }
          }
        `}
      </style>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #0A679A;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: white;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #0A679A;
    height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  }
`;

const NavList = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: 500;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default Navbar;
