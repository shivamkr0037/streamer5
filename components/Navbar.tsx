"use client"

import Link from "next/link"
import Image from "next/image"
import { getSiteDomain, getSiteName } from "../lib/env"
import Button from "./action/Button"
import IconShare from "./icon/IconShare"
import { useState } from "react"
import Modal from "./modal/Modal"
import InputClipboardCopy from "./input/InputClipboardCopy"
import { Tooltip } from "react-tooltip"

const Navbar = ({ roomId }: { roomId?: string }) => {
  const [showShare, setShowShare] = useState(false)

  return (
    <div className="glass-light border-b border-dark-700 py-3 px-4 flex flex-row gap-3 items-center">
      <Link href="/" className="flex p-2 shrink-0 flex-row gap-2 items-center rounded-xl action">
        <Image src="/logo_white.png" alt="Web-SyncPlay logo" width={32} height={32} className="rounded-lg" />
        <span className="hide-below-sm font-semibold text-lg tracking-tight">{getSiteName()}</span>
      </Link>
      {roomId && (
        <>
          <Modal title="Invite your friends" show={showShare} close={() => setShowShare(false)}>
            <div className="text-neutral-300 mb-4">Share this link to let more people join in on the fun</div>
            <InputClipboardCopy className="bg-dark-800 rounded-xl" value={getSiteDomain() + "/room/" + roomId} />
          </Modal>
          <Button
            tooltip="Share the room link"
            id="navbar"
            actionClasses="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/20 rounded-xl transition-all"
            className="ml-auto py-2 px-4"
            onClick={() => setShowShare(true)}
          >
            <div className="flex items-center gap-2">
              <IconShare />
              <span className="font-medium text-sm">Share</span>
            </div>
          </Button>
        </>
      )}

      <Tooltip
        anchorId="navbar"
        place="bottom"
        style={{
          backgroundColor: "hsl(var(--dark-700))",
          borderRadius: "0.5rem",
        }}
      />
    </div>
  )
}

export default Navbar
