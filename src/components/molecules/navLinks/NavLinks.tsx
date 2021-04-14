import React from "react";
import Link from "../../atoms/navLink/Link";
import "./style.css";

interface NavLinksProps {
  linkData: string[];
}

function NavLinks(props: NavLinksProps) {
  const { linkData } = props;
  return (
    <div className="navlink-container">
      {linkData.map((name, index) => {
        return (
          <Link
            linkName={name}
            location="/"
            status={index === 0 ? "text-link-active" : "text-link"}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default NavLinks;
