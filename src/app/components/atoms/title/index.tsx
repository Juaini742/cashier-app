type Props = {
  bold: string;
  normal: string;
  className?: string;
};

function Title({bold, normal, className}: Props) {
  return (
    <h2 className={`font-bold text-2xl ${className}`}>
      {bold} <span className="font-normal">{normal}</span>
    </h2>
  );
}
export default Title;
