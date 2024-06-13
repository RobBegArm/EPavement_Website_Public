import { FC } from "react";
import { LoadedImage } from "./LoadedImage";

export interface PartnerLogoProps {
  imgName: string;
  imgAlt: string;
  title: string;
  link: string;
}

export const PartnerLogo: FC<PartnerLogoProps> = (props: PartnerLogoProps) => {
  const { imgName, imgAlt, title, link } = props;

  return (
    <li style={{ height: "17rem", width: "25rem" }} key={imgName} title={title}>
      <a href={link} target={"_blank"} rel={"noreferrer"}>
        <LoadedImage
          imgFolder={"aboutus"}
          imgName={imgName}
          imgAlt={imgAlt}
          lazyLoad={true}
        />
      </a>
    </li>
  );
};
