import { inputProps } from "@/types";

const Input = ({ name, type, placeholder, value, className }: inputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      className={`w-full px-4 py-2 rounded-lg border border-gray-600 bg-[var(--card-background)] text-white 
      placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${className}`}
    />
  );
};

export default Input;
