import Navbar from "../components/Navbar";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/actions/addToCartAction";
import Router from "next/router";

export default function Home() {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setCategoryProduct(res.data);
    });
  }, []);
  const CategoryProducts = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setCategoryProduct(res.data);
      });
  };
  const allCartProduct = [];

  const handleCart = (product) => {
    allCartProduct.push(product);
    localStorage.setItem("cartProduct", JSON.stringify(allCartProduct))
  }
  return (
    <>
      <div className="px-20">
        <div className="flex justify-center">
          <img src="https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg?w=1060&t=st=1672382727~exp=1672383327~hmac=ffd5072375bf9aeb6a3709323b68711edce921b33d32c4a905f7c39a4007b21e" alt="" srcset="" />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between">
            {categories.map((category) => {
              return (
                <div key={category} className="m-5">
                  <div
                    className="bg-blue-700 cursor-pointer p-4 w-40 text-center capitalize rounded text-sm font-semibold text-white"
                    onClick={() => CategoryProducts(category)}
                  >
                    {category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-3 my-8  ">
          {categoryProduct.map((products) => {
            return (
              <div key={products?.id} className="m-3 ">
                <div className="max-w-sm m-3   bg-white rounded-lg shadow-md ">
                  <Link href={`/products/${products?.id}`}>
                    <div className=" flex justify-center m-2">
                      <img
                        className="h-36  w-36 object-content"
                        src={products?.image}
                        alt="book"
                      />
                    </div>

                  </Link>
                  <div className=" p-2 ">
                    <div className="flex justify-center items-center h-10  m-3">
                      <a className=" font-semibold tracking-tight">
                        {products?.title}
                      </a>
                    </div>

                    <div className="flex justify-center items-center mt-2.5 mb-5">
                      <span className=" font-bold text-gray-900 ">
                        Rs.{products?.price}
                      </span>
                    </div>
                    <div className="flex justify-center mt-4 mb-2 space-x-3  lg:mt-6">

                      <button className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 ">
                        Buy now
                      </button>


                      <button
                        className="inline-flex items-center  p-2 text-sm font-medium text-center  text-gray-900 bg-white rounded-lg border border-gray-300  hover:bg-gray-100 "
                        onClick={() => handleCart(products)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
