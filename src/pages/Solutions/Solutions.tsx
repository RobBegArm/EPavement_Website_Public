import { motion } from "framer-motion";

import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { BackToTopBtn, Solution } from "../../components";
import classes from "./Solutions.module.css";

export const Solutions: FC = () => {
  return (
    <>
      <Helmet>
        <title>{"e-Pavement | Solutions"}</title>
        <meta property="og:title" content={"e-Pavement | Solutions"} />
        <meta property="og:url" content={"https://e-pavement.eu/solutions"} />
        <link rel="canonical" href={"https://e-pavement.eu/solutions"} />
      </Helmet>
      <motion.div
        className="animated--solutions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      >
        <section className={classes["section--solutions"]}>
          <article className={`${classes["solutions"]} container`}>
            <h2>SMART CROSSWALK</h2>
            {/* Regulated pedestrian crossing */}
            <Solution
              headline={"Regulated pedestrian crossing"}
              description={
                "Pedestrian traffic lights are duplicated on the road surface. They catch attention of mobile phone users. Color-blind people perceive the traffic light colors better."
              }
              img1Name={"regulated1"}
              img1Alt={
                "Regulated e-pavement smart road safety crosswalk with LEDs solution in Tallinn red light"
              }
              img2Name={"regulated2"}
              img2Alt={
                "Regulated e-pavement smart road safety crosswalk with LEDs solution in Tallinn green light"
              }
            />
            {/* Regulated bicycle crossing */}
            <Solution
              headline={"Regulated bicycle crossing"}
              description={
                "Bicycle and walking road crossings have become a safety challenge. Smart pavement solutions help to enhance safety for all road users."
              }
              img1Name={"regulatedbicycle1"}
              img1Alt={
                "Regulated e-pavement smart bicycle safety crosswalk with LEDs solution in Tallinn red light"
              }
              img2Name={"regulatedbicycle2"}
              img2Alt={
                "Regulated e-pavement smart bicycle safety crosswalk with LEDs solution in Tallinn green light"
              }
            />
            <h2>ADAPTIVE ILLUMINATION</h2>
            {/* Safe Road Near Mektory */}
            <Solution
              headline={"Safer Road"}
              description={
                "The solution with adaptive illumination enables safety with minimal light pollution."
              }
              img1Name={"adaptive1"}
              img1Alt={
                "Safe adaptive illumination e-pavement road safety solution with LEDs near Mektory"
              }
              img2Name={"adaptive2"}
              img2Alt={
                "Safe adaptive illumination e-pavement road safety solution with LEDs"
              }
            />
            {/* Unregulated pedestrian crossing */}
            <Solution
              headline={"Unregulated pedestrian crossing"}
              description={
                "The waiting area at the crossing captures the attention of the pedestrian and drivers alike."
              }
              img1Name={"unregulated1"}
              img1Alt={
                "Unregulated e-pavement smart pedestrian safety crosswalk with LEDs solution in Tallinn white light"
              }
              img2Name={"unregulated2"}
              img2Alt={
                "Unregulated e-pavement smart pedestrian safety crosswalk with LEDs solution in Tallinn"
              }
            />
          </article>
          <BackToTopBtn />
        </section>
      </motion.div>
    </>
  );
};
