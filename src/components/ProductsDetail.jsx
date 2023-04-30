import React from "react"
import {useParams} from "react-router-dom"
import productsData from "../constants/ProductsData"
import { SectionWrapper } from "../hoc";
import { Tilt as div } from "react-tilt";

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
      <div className="bg-tertiary relative w-full h-full mx-auto p-3 rounded-2xl  ">
        <div>
          <div className="relative w-full ">
            <img
              src={thisProduct.image}
              alt="product_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] m-5">
              {thisProduct.name}
            </h3>
            <p className=" text-secondary text-[14px] p-3">
              {thisProduct.descriptionLong}
            </p>
          </div>
          <h3 className="text-white font-bold text-[24px] p-3">
            {thisProduct.price} ${" "}
          </h3>
          <div className="flex mr-5 h-full">
            <div className="ml-auto">
              <button className="buyBtn p-3 ">
                <span className="buyeBtn_lg">
                  <span className="buyBtn_sl"></span>
                  <span className="buyBtn_text flex gap-2">
                    Buy Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="file: h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SectionWrapper(ProductDetail, "");
