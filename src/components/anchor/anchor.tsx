import { AnchorHTMLAttributes, FC, ReactNode } from "react"
import { DiscordIcon } from "../utils/discord-icon"
import { GithubIcon } from "lucide-react"

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: "discord" | "github" | 'default'
  icon?: ReactNode
}

const AnchorTypes: Record<string, string> = {
  "github": "px-2 py-2 gap-2 bg-github-darkblue border-github-darkblue/70 hover:bg-github-darkblue/60 hover:border-github-darkblue/30 active:border-github-darkblue/40 active:bg-github-darkblue/70",
  "discord": "px-2 py-2 gap-2 bg-discord-blue border-discord-blue/70 hover:bg-discord-blue/60 hover:border-discord-blue/30 active:border-discord-blue/40 active:bg-discord-blue/70",
  "default": "p-3 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 active:bg-zinc-800 active:bg-zinc-700"
}

export const Anchor: FC<AnchorProps> = ({
  label,
  children,
  ...rest
}) => {
  return (
    <a className={`flex w-fit h-fit ${label ? AnchorTypes[label] : ""} ring-off justify-around items-center rounded-md border-2 outline-none text-zinc-50 focus:border-zinc-200 transition-colors ease-in-out duration-200`}
      {...rest}
    >
      <div>
        {label === 'discord'
          ? <DiscordIcon />
          : label === 'github'
            ? <GithubIcon />
            : null
        }
      </div>
      {label && (
        <p className="font-medium select-none text-nowrap">
          {label === 'discord'
            ? 'Discord'
            : label === 'github'
              ? 'GitHub'
              : label
          }
        </p>
      )}
    </a>
  )
}
