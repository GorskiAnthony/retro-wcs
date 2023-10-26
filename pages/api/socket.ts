import { Server } from "socket.io";

export default function SocketHandler(req: any, res: any) {
	const io = new Server(res.socket.server);

	io.on("connection", (socket) => {
		console.log("Socket.io server started: ", socket.id);
		socket.on("addMessage", (obj: Object) => {
			/**
			 * output:
			 *
			 * obj = {
			 * 	"message": "Hello World",
			 *  "column": "good",
			 * };
			 */
			io.emit("messageAdded", obj);
		});
	});

	res.end();
}
