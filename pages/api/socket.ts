import type { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

export default function socketHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("receiveRoll", (msg) => {
        socket.emit(
          "sendRoll",
          "Your dice roll is " + msg.map((item) => item.roll)
        );
      });
    });
  }
  res.end();
}
