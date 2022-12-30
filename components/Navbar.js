import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import { ADD } from "../redux/actions/addToCartAction";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [showModal, setShowModal] = useState(false);


  const product = useSelector((state) => state.cartProduct);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res?.data);
    });
  }, []);
  const searchText = (e) => {
    console.log(e);
    setFilterData(e.target?.value);
    let searchText = e.target?.value;
    setShowModal(true);
    if (searchText.trim().length > 0) {
      let searchedData = products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(searchText.toLowerCase().trim());
      });
      setSearchData(searchedData);

      console.log(searchData);
    }
  };

  const cartClick = () => {
    Router.push("/cart");
  };

  return (
    <>
      <nav className="sticky top-0 w-screen  px-20  flex justify-between items-center h-16 bg-purple-800 drop-shadow-md">
        <div>
          <Link href="/">
            <div className="text-white text-2xl font-semibold italic">
              Home{" "}
            </div>
          </Link>
        </div>
        <div className="flex  mx-3 ">
          <div>
            <input
              type="text"
              className="  pl-2 text-black text-base  w-72 h-8 rounded-lg "
              placeholder="Search......."
              value={filterData}
              onChange={searchText}
            />
          </div>
        </div>
        <div className=" flex flex-row items-end  ">


          <button className="relative flex sm:inline-block mx-2 ">
            <BsCart4 size={35} className=" text-white" />
            <span
              className="absolute right-0 top-0 rounded-full bg-red-600 w-5 h- top right text-white 
                  text-sm  text-center"
              onClick={cartClick}
            >
              {product}
            </span>
          </button>

          <Link href="/profile">
            <CgProfile size={33} className=" text-white" />
          </Link>
        </div>
      </nav>
      {showModal === true ? (
        <div className=" flex justify-center relative ">
          <div className="absolute z-30 p-4 bg-gray-100 rounded-md">
            {

              searchData.length !== 0 ?
                (searchData.map((products, index) => {
                  return (
                    <div key={index} className="flex justify-center curser-pointer text-sm font-semibold py-1">
                      <div
                        onClick={() => {
                          setShowModal(false);
                          Router.push(`/products/${products?.id}`);
                        }}
                      >
                        {products?.title}
                      </div>
                    </div>
                  );
                })) :

                <div className="h-8 capitalize font-bold text-sm py-2 text-gray-800">
                  No such product found
                </div>
            }
          </div>

        </div>
      ) : null}

    </>

  );
};

export default Navbar;
