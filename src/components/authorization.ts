/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore
// @ts-nocheck
import * as fs from 'fs';
import * as express from 'express';
import * as path from 'path';

function authorization() {
// const express = require("express");
// const fs = require("fs");
const app = express();
const pathToBuild = path.resolve() + "\\build\\resources\\";

app.use(express.json());

app.get("/listUsers", function (req, res) {
  fs.readFile(pathToBuild + "users.json", "utf8", function (err, data) {
    console.log(pathToBuild);
    res.end(data);
  });
});

app.post("/addUser", function (req, res) {
  // First read existing users.
  const reqData = req.body;
  fs.readFile(pathToBuild + "users.json", "utf8", function (err, data) {
    try {
      const newData = JSON.parse(data);
      const newId = newData[`${newData.length - 1}`].id + 1;
      newData.forEach((elem) => {
        if (elem.email === reqData.email) {
          res.end('THIS EMAIL EXIST');
          throw new Error('Error: this email exist');
        }
      });
      reqData.id = newId;
      newData.push(reqData);
      fs.writeFile(
        pathToBuild + "users.json",
        JSON.stringify(newData),
        {},
        (err) => {return err;}
      );
      res.end(JSON.stringify(newData));
    } catch (err) {return err;}
  });
});

app.get("/:id", function (req, res) {
  // First read existing users.
  fs.readFile(pathToBuild + "users.json", "utf8", function (err, data) {
    const users = JSON.parse(data);
    let user = {};
    users.forEach((elem) => {
      if ((elem.id = req.params.id)) {
        user = elem;
      }
    });
    res.end(JSON.stringify(user));
  });
});

app.delete('/deleteUser/:id', function (req, res) {
  // First read existing users.
  fs.readFile(pathToBuild + "users.json", 'utf8', function (err, data) {
     const newData = JSON.parse( data );
     newData.forEach((elem, index) => {
       if (elem.id == req.params.id){
         console.log(elem.id);
         console.log(req.params.id);
         newData.splice(index, 1);
        fs.writeFile(
          pathToBuild + "users.json",
          JSON.stringify(newData),
          {},
          (err) => {return err;}
        );
      }
     });
     res.end( JSON.stringify(newData));
  });
});

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
}

export default authorization;