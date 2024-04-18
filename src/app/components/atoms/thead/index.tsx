import React from "react";
type TheadType = {
  children: React.ReactNode;
  className: string;
  variant?: "gray";
};

function Thead(props: TheadType) {
  const {children, variant, className} = props;

  let tBodyStyle = "";

  switch (variant) {
    case "gray":
      tBodyStyle += "thead-gray";
      break;

    default:
      break;
  }

  return (
    <thead className={`${tBodyStyle} ${className} w-full`}>{children}</thead>
  );
}

export default Thead;
