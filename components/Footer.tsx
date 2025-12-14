import type { FC } from "react"
import IconGithub from "./icon/IconGithub"
import NewTabLink from "./action/NewTabLink"
import IconCopyright from "./icon/IconCopyright"

interface Props {
  error?: number
}

const Footer: FC<Props> = ({ error }) => {
  return (
    <footer className="glass-light border-t border-dark-700 py-4 px-6">
      {error && <div className="text-red-400 text-sm mb-2">Error {error}</div>}
      <div className="text-sm flex flex-col gap-3 sm:flex-row sm:items-center text-neutral-400">
        <div className="flex flex-row items-center gap-1">
          <IconCopyright sizeClassName="h-3 w-3" />
          <NewTabLink href="t.me/yucant">Charlie</NewTabLink>
          <span>2022</span>
        </div>

        <div className="flex items-center gap-1">
          <span>Icons by</span>
          <NewTabLink href="https://heroicons.com">Heroicons</NewTabLink>
          <span>and</span>
          <NewTabLink href="https://fontawesome.com">Font Awesome</NewTabLink>
        </div>

        <NewTabLink
          className="sm:ml-auto flex items-center gap-2 hover:text-neutral-200 transition-colors"
          href="shivam413-Streamer.hf.space"
        >
          <IconGithub /> <span>GitHub</span>
        </NewTabLink>
      </div>
    </footer>
  )
}

export default Footer
