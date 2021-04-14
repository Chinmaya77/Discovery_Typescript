import React from "react";

import "./style.css";
import Text from "../text/Text";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  bgColor: string;
  btnName: string;
}

function Button(props: ButtonProps) {
  const { type, bgColor, btnName } = props;

  return (
    <div>
      <button type={type} className={`btn ${bgColor}`}>
        <Text content={btnName} type="text-btn"></Text>
      </button>
    </div>
  );
}

export default Button;
