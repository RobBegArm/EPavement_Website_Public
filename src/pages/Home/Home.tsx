import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FC } from "react";
import { Helmet } from "react-helmet-async";
import classes from "./Home.module.css";

export const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{"e-Pavement | Home"}</title>
        <meta property="og:title" content={"e-Pavement | Home"} />
        <meta property="og:url" content={"https://e-pavement.eu/"} />
        <link rel="canonical" href={"https://e-pavement.eu/"} />
      </Helmet>
      <motion.div
        className="animated--home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      >
        <section className={classes["section--home"]}>
          <div className={classes["hero-container"]}>
            <div className={classes["hero-description"]}>
              <div className={classes["hero-headline-box"]}>
                <h1>Smart road safety.</h1>
              </div>
              <div className={classes["hero-secondary-headline-box"]}>
                <h2>
                  The e-bricks enhance the safety of the <br /> most vulnerable
                  traffic participants.
                </h2>
              </div>
              <div className={classes["cta-buttons-box"]}>
                <button
                  className={`btn ${classes["btn--learn-more"]} focusable`}
                  onClick={() => navigate("./solutions")}
                >
                  Learn More
                </button>
                <button
                  className={`btn ${classes["btn--cta"]} focusable`}
                  onClick={() => navigate("./contact")}
                >
                  Find your smart solution
                </button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};
