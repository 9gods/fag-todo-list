import { FC, InputHTMLAttributes } from "react"

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input className="min-w-60 p-2 border-2 rounded-md outline-none text-zinc-200 placeholder:text-zinc-400 border-zinc-400 bg-zinc-800 hover:border-zinc-500 focus:border-zinc-300 transition-colors duration-200 ease-in-out"
      type="text"
      {...props}
    />
  );
}
