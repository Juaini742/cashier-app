type ButtonType = {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "white"
    | "disable";
  type?: "button";
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonType) => {
  const {className, children, variant, onClick, style} = props;

  let btnStyle = "";

  switch (variant) {
    case "primary":
      btnStyle += "btn-primary";
      break;
    case "warning":
      btnStyle += "btn-warning";
      break;
    case "danger":
      btnStyle += "btn-danger";
      break;
    case "white":
      btnStyle += "btn-white";
      break;
    case "disable":
      btnStyle += "btn-disable";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${btnStyle} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};
