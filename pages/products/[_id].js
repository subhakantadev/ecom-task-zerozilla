// import React from 'react'
import { useRouter } from "next/router";
import { useState, useEffect, React } from "react";
import axios from "axios";
import Link from "next/link";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const id = router.query?._id;
  // console.log(router?.query?._id);
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(product);
  return (
    <div className="m-10 px-20 py-10 shadow-lg ">
      <div className="md:flex  justify-center py-12  px-4">
        <div className="w-2/5   ">
          <img
            alt="image of product"
            className="h-72  w-72 object-content"
            src={product?.image}
          />
        </div>

        <div className=" w-1/2    ">
          <div>
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 " >
                <span class="text-sm leading-none text-gray-600 dark:text-gray-300 " style={{ background: 'green', color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>
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

            {/* <div className="mx-3">
            <p class=" text-base text-gray-600 ">
           {product?.rating?.count}
            </p>
     
          </div> */}
            <div className="m-3">
              <p className=" text-xl font-bold text-gray-600  my-7">
                ₹ {product?.price}
              </p>
            </div>
            <div className="flex justify-around gap-4 ">
              <button className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-gray-800 hover:text-white border-2 border-black bg-white w-full py-4 hover:bg-gray-800 rounded">
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
