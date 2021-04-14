import React from "react";
import "./style.css";

interface InputProps {
  placeHolder: string;
  classType: string;
}

function Input(props: InputProps) {
  const { placeHolder, classType } = props;
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        className={`input input-${classType}`}
      ></input>
    </div>
  );
}

export default Input;
