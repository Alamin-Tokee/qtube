const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const db = require("./config/db");
const colors = require("colors");
const auth = require("./routes/authRoute");
const video = require("./routes/videoRoute");
const upload = require("./routes/uploadRoute");
const morgan = require("morgan");

dotenv.config();
db();

app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cookieParser());

app.use("/api/users", auth);
app.use("/api/video", video);
app.use("/api/uvideo", upload);

app.use(express.static("public"));
app.use("/videos", express.static("videos"));

// For production

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(colors.yellow.bold(`Server Listening on ${port}`));
});
