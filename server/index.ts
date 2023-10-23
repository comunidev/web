import { Server } from "socket.io"

const io = new Server(4500)

io.on("connection", (socket) => {
  socket.on("cmd:drawLine", (data) => {

  })

  socket.on("cmd:createRoom", (data) => {

  })

  socket.on("query:getRooms", (data) => {
  })

  socket.on("query:getRoom", (data) => {

  })
})
