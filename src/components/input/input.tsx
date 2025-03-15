import { inputProps } from "@/types";

const input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-full p-4 mx-2 rounded-lg text-base bg-[var(--card-background)] border border-[var(--border-color)] placeholder-bg-[var(--text-color)] text-white focus:outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default input;
