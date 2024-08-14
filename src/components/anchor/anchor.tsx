import { AnchorHTMLAttributes, FC } from "react"
import { DiscordIcon } from "../utils/discord-icon"
import { GithubIcon } from "lucide-react"

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: "discord" | "github"
}

const AnchorTypes: Record<string, string> = {
  "github": "py-2 gap-2 bg-blue-600 border-blue-500 hover:bg-blue-500 hover:border-blue-400 active:border-blue-600 active:bg-blue-700",
  "discord": "py-2 gap-2 bg-purple-600 border-purple-500 hover:bg-purple-500 hover:border-purple-400 active:border-purple-600 active:bg-purple-700"
}

export const Anchor: FC<AnchorProps> = ({
  label,
  children,
  ...rest
}) => {
  return (
    <a className={`flex w-fit h-fit px-2 ${label ? AnchorTypes[label] : ""} justify-around items-center rounded-md border-2 outline-none text-zinc-50 focus:border-zinc-200 transition-colors duration-200`}
      {...rest}
    >
      <div>
        {label === 'discord'
          ? <DiscordIcon />
          : <GithubIcon />
        }
      </div>
      {label && (
        <p className="font-medium select-none text-nowrap">
          {label === 'discord'
            ? 'Discord'
            : 'Github'
          }
        </p>
      )}
    </a>
  )
}
