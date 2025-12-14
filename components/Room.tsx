"use client"
import { type FC, useEffect, useState } from "react"
import Player from "./player/Player"
import { type ClientToServerEvents, createClientSocket, type ServerToClientEvents } from "../lib/socket"
import Button from "./action/Button"
import type { Socket } from "socket.io-client"
import ConnectingAlert from "./alert/ConnectingAlert"
import PlaylistMenu from "./playlist/PlaylistMenu"
import IconLoop from "./icon/IconLoop"
import InputUrl from "./input/InputUrl"
import UserList from "./user/UserList"
import ChatPanel from "./chat/ChatPanel"
import YoutubeSearch from "./search/YoutubeSearch"

interface Props {
  id: string
}

let connecting = false

const Room: FC<Props> = ({ id }) => {
  const [connected, setConnected] = useState(false)
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null)
  const [url, setUrl] = useState("")

  useEffect(() => {
    fetch("/api/socketio").finally(() => {
      if (socket !== null) {
        setConnected(socket.connected)
      } else {
        const newSocket = createClientSocket(id)
        newSocket.on("connect", () => {
          setConnected(true)
        })
        setSocket(newSocket)
      }
    })

    return () => {
      if (socket !== null) {
        socket.disconnect()
      }
    }
  }, [id, socket])

  const connectionCheck = () => {
    if (socket !== null && socket.connected) {
      connecting = false
      setConnected(true)
      return
    }
    setTimeout(connectionCheck, 100)
  }

  if (!connected || socket === null) {
    if (!connecting) {
      connecting = true
      connectionCheck()
    }
    return (
      <div className={"flex justify-center"}>
        <ConnectingAlert />
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="flex-1 space-y-4">
        <Player roomId={id} socket={socket} />

        <div className="glass-light rounded-2xl p-4 border border-dark-700">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              tooltip="Do a forced manual sync"
              className="flex items-center justify-center gap-2 py-2 px-4"
              actionClasses="bg-dark-700 hover:bg-dark-600 active:bg-dark-500 rounded-xl transition-all"
              onClick={() => {
                console.log("Fetching update", socket?.id)
                socket?.emit("fetch")
              }}
            >
              <IconLoop className="hover:animate-spin" />
              <span className="text-sm font-medium">Manual sync</span>
            </Button>
            <InputUrl
              className="flex-1"
              url={url}
              placeholder="Enter video URL to play now"
              tooltip="Play given url now"
              onChange={setUrl}
              onSubmit={() => {
                console.log("Requesting", url, "now")
                socket?.emit("playUrl", url)
                setUrl("")
              }}
            >
              Play
            </InputUrl>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChatPanel socket={socket} />
          <YoutubeSearch socket={socket} />
        </div>

        <UserList socket={socket} />
      </div>

      <PlaylistMenu socket={socket} />
    </div>
  )
}

export default Room
