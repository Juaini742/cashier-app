import React from "react";
type TableType = {
  children: React.ReactNode;
  className: string;
  variant?: "white";
};

function Table(props: TableType) {
  const {children, variant, className} = props;

  let tableStyle = "";

  switch (variant) {
    case "white":
      tableStyle += "table-white";
      break;

    default:
      break;
  }

  return (
    <table className={`${tableStyle} ${className} w-full`}>{children}</table>
  );
}

export default Table;
