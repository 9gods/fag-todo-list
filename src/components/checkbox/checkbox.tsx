import { FC, InputHTMLAttributes } from "react"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  ...rest
}) => {
  return (
    <div className="flex gap-2">
      <input type="checkbox" {...rest} />
      <h1 className="font-medium lining-nums leading-none text-zinc-300">{label}</h1>
    </div>
  )
}
