module.exports.routesHandler = (req, res) => {
  if (req.url === "/create-user" && req.method === "POST") {
    const dataArr = [];
    req.on("data", (chunk) => {
      dataArr.push(chunk);
    });

    return req.on("end", () => {
      const data = Buffer.concat(dataArr).toString("utf-8");
      console.log(data.split("=")[1]);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>We got the message</h1>");
      res.end();
    });
  }

  if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<ul><li>Vlad</li><li>Victor</li><li>Nick</li></ul>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hi there!</h1>");
  res.write(
    '<form method = "POST" action = "./create-user"> <p>Please enter your name: </p> <input type = "text" name = "username"></input> <button>Send message</button> </form>'
  );
  res.end();
};
