import React from "react";

type ThType = {
  children: React.ReactNode;
  className: string;
  variant?: "base";
  scope?: string;
};

function Th(props: ThType) {
  const {children, variant, className, scope} = props;

  let thStyle = "";

  switch (variant) {
    case "base":
      thStyle += "th-base";
      break;

    default:
      break;
  }

  return (
    <th scope={scope} className={`${thStyle} ${className}`}>
      {children}
    </th>
  );
}

export default Th;
