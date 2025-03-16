import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({
  type = "button",
  text,
  onClick,
  bgColor,
  className,
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "rounded-lg px-5 py-2 text-white transition-all duration-300 focus:outline-none shadow-md",
        "hover:opacity-80 hover:scale-105 active:scale-95",
        bgColor,
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
