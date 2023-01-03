// import React from 'react'
import { useRouter } from "next/router";
import { useState, useEffect, React, useLayoutEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/addToCartAction";
import Router from "next/router";


function ProductDetails() {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const id = router.query?._id;
  
  const dispatch = useDispatch();
  const allCartProduct = [];

  useLayoutEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => console.log(err));

  }, [id]);
  if (typeof window !== 'undefined') {
    if(JSON.parse(localStorage.getItem("cartProduct")) != null){
      const cartData = JSON.parse(localStorage.getItem("cartProduct"));
      allCartProduct.push(...cartData);
    }else{
      // allCartProduct.push([])
    }
 
  }
  const handleCart = (product)=>{
    allCartProduct.push(product);
    localStorage.setItem("cartProduct", JSON.stringify(allCartProduct));
    // console.log(allCartProduct);

    if (allCartProduct != null) {
      dispatch(addToCart(allCartProduct?.length));
    }
    Router.push("/cart")
  }

  return (
    <div className="m-10 px-10 py-10 shadow-lg ">
      <div className="flex  justify-center py-12  px-4">
        <div className="w-2/5   ">
          <img
            alt="image of product"
            className="h-72  w-72 object-content"
            src={product?.image}
          />
        </div>

        <div className=" w-1/2 ml-6   ">
          <div>
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 " >
                <span className="text-sm leading-none text-gray-600 dark:text-gray-300 " style={{  padding: "2px 5px", borderRadius: "5px" }}>
                  {product?.category}
                </span>
              </p>
              <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                {product?.title}
              </h1>
            </div>

            <div className="m-3 flex justify-end">
              <p className=" text-base text-gray-600 font-semibold ">
                <strong>Rating : </strong><span style={{ background: 'green', color: "#fff", padding: "2px 5px", borderRadius: "5px" }}> {product?.rating?.rate}*</span>
              </p>
            </div>
            <div className="m-3">
              <p className=" text-base text-gray-600  my-7">
                {product?.description}
              </p>
            </div>
            <div className="m-3">
              <p className=" text-xl font-bold text-gray-600  my-7">
                ₹ {product?.price}
              </p>
            </div>
            <div className="flex justify-around gap-4 ">
              <button onClick={()=>handleCart(product)} className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-gray-800 hover:text-white border-2 border-black bg-white w-full py-4 hover:bg-gray-800 rounded">
                Add to Cart
              </button>
              <Link
                className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-2 hover:border-black  w-full py-4 focus:outline-none rounded"
                href="/cart"
              >
                <button>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
