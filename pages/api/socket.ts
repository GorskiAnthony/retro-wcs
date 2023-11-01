import { Server } from "socket.io";

interface MessageObject {
	message: string;
	column: string;
	room: string; // Ajoutez la propriété 'room'
}

export default function handler(req: any, res: any) {
	if (res.socket.server.io) {
		console.log("already have io instance");
	} else {
		const io = new Server(res.socket.server);
		res.socket.server.io = io;

		io.on("connection", (socket) => {
			console.log("Socket.io server started: ", socket.id);

			socket.on("joinRoom", (slug) => {
				socket.join(slug);
				console.log(`Socket ${socket.id} joined room ${slug}`);
			});

			socket.on("addMessage", (obj: MessageObject) => {
				/**
				 * output:
				 *
				 * obj = {
				 * 	"message": "Hello World",
				 *  "column": "good",
				 *  "room": "room1"
				 * };
				 */
				io.to(obj.room).emit("messageAdded", obj);
			});
		});
	}

	res.end();
}
