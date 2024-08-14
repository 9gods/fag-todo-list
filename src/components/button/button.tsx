import { ButtonHTMLAttributes, FC } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  buttonType: 'text' | 'icon'
  children?: JSX.Element | JSX.Element[]
}

const ButtonTypes: Record<string, string> = {
  "text": "py-2 gap-2",
  "icon": " py-2"
}

export const Button: FC<ButtonProps> = ({
  label,
  buttonType,
  children,
  ...rest
}) => {
  return (
    <button className={`flex w-fit h-fit px-2 ${buttonType ? ButtonTypes[buttonType] : ""} justify-around items-center rounded-md border-2 outline-none bg-indigo-600 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-400 focus:border-zinc-200 active:border-indigo-600 active:bg-indigo-700 text-zinc-50 transition-colors duration-200`}
      {...rest}
    >
      {label && (
        <p className="font-medium select-none text-nowrap">{label}</p>
      )}
      <div>
        {children}
      </div>
    </button>
  )
}
