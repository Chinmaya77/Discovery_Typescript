import React from "react";

import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";
import "./style.css";

interface CorouselInfoProps {
  textContentHeader: string;
  textContentSubHeader: string;
  tag1: string;
  tag2: string;
}

function CorouselInfo(props: CorouselInfoProps) {
  const { textContentHeader, textContentSubHeader, tag1, tag2 } = props;
  return (
    <div className="corouselInfo-container">
      <div className="infoHeader">
        {" "}
        <Text content={textContentHeader} type="text-header"></Text>
      </div>
      <div className="infoSubHeader">
        {" "}
        <Text content={textContentSubHeader} type="text-subheader"></Text>
      </div>
      <div className="corousel-tags">
        <Text content={tag1} type="text-tag"></Text>
        <Text content={tag2} type="text-tag"></Text>
      </div>

      <div className="play-button-container">
        <Image
          source="play-button.png"
          width="92"
          height="67"
          imgBorder="img-play"
        ></Image>

        <Text content="Play" type="text-play"></Text>
      </div>
    </div>
  );
}

export default CorouselInfo;
