import { FC } from "react";

export interface SpinnerProps {
  imgName: string;
  imgAlt: string;
}

export const Spinner: FC<SpinnerProps> = (props: SpinnerProps) => {
  const { imgName, imgAlt } = props;

  return (
    <img
      key={`placeholderFor:${imgName}`}
      alt={imgAlt}
      src={`${process.env.PUBLIC_URL}/assets/images/util/spinner.gif`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "260px",
        height: "260px",
        margin: "auto auto",
      }}
    />
  );
};
