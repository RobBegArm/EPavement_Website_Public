import { FC, useCallback, useState } from "react";
import { Spinner } from "./Spinner";

export interface LoadedImageProps {
  imgName: string;
  imgFolder: string;
  imgAlt: string;
  lazyLoad?: boolean;
  imgClasses?: string;
  pictureClasses?: string;
}

export const LoadedImage: FC<LoadedImageProps> = (props: LoadedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const { imgName, imgFolder, imgAlt, lazyLoad, imgClasses, pictureClasses } =
    props;

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <picture id={`picture_${imgName}`} className={pictureClasses || ""}>
        {/* Load lightweight WEPB if browser supports */}
        <source
          srcSet={`${process.env.PUBLIC_URL}/assets/images/${imgFolder}/${imgName}.webp`}
          type={"image/webp"}
        />
        {/* Fallback jpg if browser doesnt support */}
        <source
          srcSet={`${process.env.PUBLIC_URL}/assets/images/${imgFolder}/${imgName}.jpg`}
          type={"image/jpg"}
        />
        <img
          style={{ display: loaded ? "block" : "hidden", width: "100%" }}
          id={`img_${imgName}`}
          onLoad={onLoad}
          key={imgName}
          src={`${process.env.PUBLIC_URL}/assets/images/${imgFolder}/${imgName}.jpg`}
          alt={imgAlt}
          loading={lazyLoad ? "lazy" : "eager"}
          className={`shadowed-card-2 ${imgClasses || ""}`}
        />
      </picture>
      {/* Displays spinner while image loads */}
      {!loaded && <Spinner imgName={props.imgName} imgAlt={props.imgAlt} />}
    </>
  );
};
