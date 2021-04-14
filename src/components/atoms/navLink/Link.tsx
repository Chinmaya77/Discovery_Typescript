import React from "react";
import Text from "../text/Text";
import "./style.css";

interface LinkProps {
  status: string;
  linkName: string;
  location: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
    | undefined;
}

function Link(props: LinkProps) {
  const { onClick, location, linkName, status } = props;

  return (
    <div>
      <a href={location} onClick={onClick} className="link">
        <Text content={linkName} type={status}></Text>{" "}
      </a>
    </div>
  );
}

export default Link;
