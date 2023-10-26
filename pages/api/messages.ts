import { Server } from "socket.io";

export default function handler(req: any, res: any) {
	return res.status(200).json({ result: "It's work" });
	if (res.socket.server.io) {
		console.log("already have io instance");
	} else {
		const io = new Server(res.socket.server);
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
