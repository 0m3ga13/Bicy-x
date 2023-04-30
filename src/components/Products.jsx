import React, { useState } from "react";
import productsData from "../constants/ProductsData";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const products = productsData.map(product=> {
    return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div key={product.id}>
          <motion.div
            variants={fadeIn("right", "spring", product.index * 0.5, 0.75)}
          >
            <div className="relative w-full h-[230px]">
              <img
                onLoad={() => setIsLoaded(true)}
                style={{ display: isLoaded ? "block" : "none" }}
                src={product.image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="loader" />
                </div>
              )}
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">
                {product.name}
              </h3>
              <p className="mt-2 text-secondary text-[14px]">
                {product.description}
              </p>
            </div>
            <h3 className="text-white font-bold text-[24px] py-2">
              {product.price} $
            </h3>
          </motion.div>
        </div>

        <Link to={`/products/${product.id}`}>
          <button>
            <div className="shopbtn">
              <svg
                className="css-i6dzq1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="#FFF"
                height="20"
                width="20"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle r="3" cy="12" cx="12"></circle>
              </svg>
              <span>Quick View</span>
            </div>
            <div className="hover-btn">
              <svg
                className="css-i6dzq1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="#ffd300"
                height="20"
                width="20"
                viewBox="0 0 24 24"
              >
                <circle r="1" cy="21" cx="9"></circle>
                <circle r="1" cy="21" cx="20"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Shop Now</span>
            </div>
          </button>
        </Link>
      </Tilt>
    );
  });

  return (
    <>
        <div className="relative z-0 bg-primary">

     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Buy Now</p>
        <h2 className={`${styles.sectionHeadText}`}>Our Store</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7">

      {products}
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Products, "");
