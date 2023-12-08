const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createServer } = require("http");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 7730;
const server = createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

server.listen(PORT, () => console.log(`Server already running at http://localhost:${PORT}`));
