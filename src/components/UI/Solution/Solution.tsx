import { FC } from "react";
import { LoadedImage } from "../LoadedImage";
import classes from "./Solution.module.css";

export interface SolutionProps {
  headline: string;
  description: string;
  img1Name: string;
  img1Alt: string;
  img2Name: string;
  img2Alt: string;
}

export const Solution: FC<SolutionProps> = (props: SolutionProps) => {
  const { headline, description, img1Name, img1Alt, img2Name, img2Alt } = props;

  return (
    <div className={classes["solution"]}>
      <h3>{headline}</h3>
      <p className="description-text">{description}</p>
      <div className={classes["img-container"]}>
        <LoadedImage
          imgFolder={"solutions"}
          imgName={img1Name}
          imgAlt={img1Alt}
          lazyLoad={true}
        />
        <LoadedImage
          imgFolder={"solutions"}
          imgName={img2Name}
          imgAlt={img2Alt}
          lazyLoad={true}
        />
      </div>
    </div>
  );
};
