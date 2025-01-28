import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-[#5B5858] text-white px-6 py-2 text-m font-bold  rounded-full hover:bg-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500",
        className
      )}
    >
      {children}
    </button>
  );
};
