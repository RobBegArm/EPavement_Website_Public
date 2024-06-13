import { motion } from "framer-motion";
import { FaRoad } from "react-icons/fa";
import { MdCompress } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { TbTemperature } from "react-icons/tb";

import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { BackToTopBtn, LoadedImage } from "../../components";
import classes from "./Product.module.css";

export const Product: FC = () => {
  return (
    <>
      <Helmet>
        <title>{"e-Pavement | Product"}</title>
        <meta property="og:title" content={"e-Pavement | Product"} />
        <meta property="og:url" content={"https://e-pavement.eu/product"} />
        <link rel="canonical" href={"https://e-pavement.eu/product"} />
      </Helmet>
      <motion.div
        className="animated--product"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      >
        <section className={classes["section--product"]}>
          <h2>Our Product</h2>
          <article className={`${classes["product-box"]}`} id="article_product">
            <p className="description-text">
              The basis of our products is a <strong>„smart road brick“</strong>{" "}
              that contains LEDs, electronic compounds, and PV elements
              encapsulated into thermo-reactive polymer.
            </p>
            <div className={classes["product-image-box"]}>
              <LoadedImage
                imgFolder={"product"}
                imgName={"productimage"}
                imgAlt={
                  "E-Pavement smart road brick with LED solutions that can be assembled into panels"
                }
              />
            </div>
            <p className="description-text">
              The e-bricks may be integrated into <strong>panels</strong>.
              Within PV elements, depending on solar radiation conditions, they
              can act <strong>autonomously</strong> or be joined into a{" "}
              <strong>grid</strong>. The e-panels can communicate with the rest
              of the traffic infrastructure by wires, WiFi, Bluetooth, or other
              RF channels.
            </p>
            <ul className={classes["features-list"]}>
              <li className={classes["feature"]} key={`feature_1`}>
                <div className={classes["icon-box"]}>
                  <RxDimensions />
                </div>
                <p>Flexible Dimensions</p>
              </li>
              <li className={classes["feature"]} key={`feature_2`}>
                <div className={classes["icon-box"]}>
                  <MdCompress />
                </div>
                <p>
                  Max Pressure:
                  <br /> 1000 kg/cm<sup>2</sup>
                </p>
              </li>
              <li className={classes["feature"]} key={`feature_3`}>
                <div className={classes["icon-box"]}>
                  <TbTemperature />
                </div>
                <p>
                  Max- Temperatures:
                  <br /> 70-90 ℃
                </p>
              </li>
              <li className={classes["feature"]} key={`feature_4`}>
                <div className={classes["icon-box"]}>
                  <FaRoad />
                </div>
                <p>
                  Surface Friction μ։
                  <br /> 0.45
                </p>
              </li>
            </ul>
            <p className="description-text">
              The product may be used for <strong>light signals</strong> for
              traffic participants or <strong>adaptive illumination</strong> of
              walking roads.
            </p>
          </article>
          <BackToTopBtn />
        </section>
      </motion.div>
    </>
  );
};
