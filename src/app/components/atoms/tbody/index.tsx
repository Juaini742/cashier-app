import React from "react";
type TbodyType = {
  children: React.ReactNode;
  className?: string;
  variant?: "gray";
};

function Tbody(props: TbodyType) {
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
    <tbody className={`${tBodyStyle} ${className} w-full`}>{children}</tbody>
  );
}

export default Tbody;
