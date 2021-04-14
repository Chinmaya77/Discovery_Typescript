import React from "react";
import "./style.css";

interface CorouselIndicatorProps {
  classType: string;
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
}

function CorouselIndicator(props: CorouselIndicatorProps) {
  const { classType, onClick } = props;
  return <div className={`${classType}`} onClick={onClick}></div>;
}

export default CorouselIndicator;
