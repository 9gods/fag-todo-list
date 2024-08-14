import { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input className="min-w-60 w-full p-2 border-2 rounded-md outline-none text-zinc-200 placeholder:text-zinc-600 border-zinc-700 bg-zinc-800 hover:border-zinc-500 focus:border-zinc-300 transition-colors duration-200 ease-in-out"
        type="text"
        {...props}
      />
    </div>
  );
}

export default Input
