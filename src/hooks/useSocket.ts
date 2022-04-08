import { useMemo, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const useSocket = (serverPath: string) => {
  const socket = useMemo(() => io(serverPath, { transports: ["websocket"] }), []);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
  };
};

export default useSocket;
