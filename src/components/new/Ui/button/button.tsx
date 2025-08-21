import { ReactNode, useState } from "react";
import "./style.scss";

type Props = {
  className?: string;
  primary?: boolean;
  onClick: () => void;
  children: ReactNode;
};

export default function Button({
  primary = true,
  className,
  onClick,
  ...props
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 250); // длительность анимации
    onClick();
  };
  return (
    <button
      className={`btn ${primary && "primary"} className`}
      {...props}
      onClick={handleClick}
    />
  );
}
