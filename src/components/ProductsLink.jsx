import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import {Link} from "react-router-dom"

const ProjectCard = ({
  index,
  name,
  description,
  price,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />


        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <h3 className="text-white font-bold text-[24px] py-2">{price}</h3>

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
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Market</p>
        <h2 className={`${styles.sectionHeadText}`}>Our Best Deals.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Eiusmod ullamco ex enim deserunt dolore reprehenderit enim est
          occaecat.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex mt-10 mr-5 h-full">
  <div className="ml-auto">
  <Link to="/products">

  <button className="seeMoreBtn">
    <span className="seeMoreBtn_lg">
        <span className="seeMoreBtn_sl"></span>
        <span className="seeMoreBtn_text">See More &#10132;</span>
    </span>
</button>
</Link>
  </div>
</div>

    </>
    
  );
};

export default SectionWrapper(Works, "");
