const express = require("express");
const fs = require("fs");
const app = express();
let pageViews = JSON.parse(fs.readFileSync("views.json", null));
app.get("/", function(req, res) {
    pageViews["/"]++;
    fs.writeFileSync("views.json", JSON.stringify(pageViews));
    res.send(`<h1>Hello World (${pageViews["/"]} просмотров)</h1>
        <a href="/about">перейти About страницу</a>`);
  });
  app.get("/about", function(req, res) {
    pageViews["/about"]++;
    fs.writeFileSync("views.json", JSON.stringify(pageViews));
    res.send(`<h1>About (${pageViews["/about"]} просмотров)</h1>
        <a href="/">перейти на главную страницу</a>`);
  });
app.listen(4000);
