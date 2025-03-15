import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
            "text-white hover:bg-opacity-50 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
          `${bgColor} hover:bg-opacity-50 font-medium rounded-lg text-white text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`
        )}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
