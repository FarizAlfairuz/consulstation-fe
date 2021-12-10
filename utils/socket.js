import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const URL = process.env.SOCKET_URL
const socket = io(URL, { autoConnect: false })

const SocketContext = createContext({})

function SocketProvider({children}) {
    return (
        <SocketContext.Provider value={{
            socket
        }}>
            { children }
        </SocketContext.Provider>
    )
}

const useSockets = () => {
  const context = useContext(SocketContext)
  console.log(context)

  return context
}

export { SocketProvider, useSockets }