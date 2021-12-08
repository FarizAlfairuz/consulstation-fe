import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const URL = 'http://localhost:8000'

function useSocket() {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const socketIo = io.connect(URL, { autoConnect: false })

        setSocket(socketIo)

        return () => {
            socketIo.disconnect()
        }
    }, [])

    return socket
}

export default useSocket;