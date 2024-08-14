import { FC } from "react"

interface ErrorMessageProps {
  message: string | null
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <div className={`${message === '' ? 'bg-zinc-900 border-zinc-900 border-none' : 'bg-rose-600 border-rose-400 border-2'}w-full h-fit p-2 justify-start rounded-md text-wrap font-semibold overflow-clip text-zinc-200 transition-all duration-500 ease-in-out`}>{message}</div>
}
