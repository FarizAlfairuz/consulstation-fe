import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const URL = process.env.BASE_URL

const SocketContext = createContext({})

function SocketProvider(props) {
    return (
        <SocketContext.Provider value={{}}>
            { ...props }
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
  useContext(SocketContext)
}

export default SocketProvider