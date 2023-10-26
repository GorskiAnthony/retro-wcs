import { Server } from "socket.io";

export default function handler(req: any, res: any) {
	if (res.socket.server.io) {
		console.log("already have io instance");
	} else {
		const io = new Server(res.socket.server);
		return res.json({ message: io });
		res.socket.server.io = io;

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
	}

	res.end();
}
