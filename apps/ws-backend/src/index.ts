import { WebSocketServer } from "ws"
import { client } from "@repo/db/client"

const server = new WebSocketServer({ port: 3002 })


server.on("connection", (socket)=>{
    socket.send("Hi there you are connected to the server")

     client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

})