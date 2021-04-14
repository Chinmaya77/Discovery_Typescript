import React from "react";

import "./style.css";

interface ImageProps {
  source: string;
  width?: string;

  height?: string;
  imgBorder: string;
  alt?: string | undefined;
}

function Image(props: ImageProps) {
  const { source, width, height, alt, imgBorder } = props;
  return (
    <div>
      <img
        src={source}
        width={width}
        height={height}
        alt={alt}
        className={`${imgBorder}`}
      ></img>
    </div>
  );
}

export default Image;
