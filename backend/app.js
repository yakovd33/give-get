const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const http = require("http");
const socketio = require("socket.io");

const port = process.env.PORT || 4000;
const app = express();
// app.listen(port, function() {
// 	console.log('Node app is running on port', app.get('port'));
// });

// Socket.io
var chatUsers = {};

const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
	socket.on("register", (user) => {
		chatUsers[user.user_id.toString()] = socket;

		// let found = false;
		// for (var i = 0; i < chatUsers.length; i++) {
		// //   if (chatUsers[i])
		// 	console.log(chatUsers[i].uid);
		// }
	});

	socket.on("message", ({ user_id, message, from_id, fullname }) => {
		if (chatUsers[user_id.toString()]) {
			chatUsers[user_id.toString()].emit("message", {
				from_id: from_id,
				text: message,
				fullname: fullname
			});
		}
	});
});

server.listen(port);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Settings
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());
app.options("*", cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const chatRouter = require("./routes/chat");
const meetingsRouter = require("./routes/meetings");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/chat", chatRouter);
app.use("/meetings", meetingsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// Error Handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
