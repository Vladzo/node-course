const http = require("http");

const { routesHandler } = require("./routes");

const Server = http.createServer(routesHandler);

Server.listen(3000, () => console.log("Server listen 3000"));
