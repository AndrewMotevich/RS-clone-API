import { user, address } from './type';
import * as fs from 'fs';
import express from 'express';
import * as path from 'path';

function playlist() {
// const express = require("express");
// const fs = require("fs");
const app1 = express();
const pathToBuild = path.resolve() + "\\build\\resources\\";

app1.use(express.json());

app1.get("/allPlaylists", function (req, res) {
  fs.readFile(pathToBuild + "playlists.json", "utf8", function (err, data) {
    console.log(pathToBuild);
    res.end(data);
  });
});

// app.post("/addPlaylist", function (req, res) {
//   // First read existing users.
//   const reqData = req.body;
//   fs.readFile(pathToBuild + "playlist.json", "utf8", function (err, data) {
//     try {
//       const newData = JSON.parse(data);
//       const newId = newData[`${newData.length - 1}`].id + 1;
//       newData.forEach((elem) => {
//         if (elem.email === reqData.email) {
//           res.end('THIS EMAIL EXIST');
//           throw new Error('Error: this email exist');
//         }
//       });
//       reqData.id = newId;
//       newData.push(reqData);
//       fs.writeFile(
//         pathToBuild + "playlist.json",
//         JSON.stringify(newData),
//         {},
//         (err) => {return err;}
//       );
//       res.end(JSON.stringify(newData));
//     } catch (err) {return err;}
//   });
// });

app1.get("/:id/:playlist", function (req, res) {
  // First read existing users.
  fs.readFile(pathToBuild + "playlists.json", "utf8", function (err, data) {
    // const users = JSON.parse(data);
    // let user = {};
    // users.forEach((elem) => {
    //   if ((elem.id = req.params.id)) {
    //     user = elem;
    //   }
    // });
    console.log(req.params);
    res.end(JSON.stringify(req.params));
  });
});

// app.delete('/deletePodcast/:id&&:playlist', function (req, res) {
//   // First read existing users.
//   fs.readFile(pathToBuild + "playlist.json", 'utf8', function (err, data) {
//      const newData = JSON.parse( data );
//      newData.forEach((elem, index) => {
//        if (elem.id == req.params.id){
//          console.log(elem.id);
//          console.log(req.params.id);
//          newData.splice(index, 1);
//         fs.writeFile(
//           pathToBuild + "playlist.json",
//           JSON.stringify(newData),
//           {},
//           (err) => {return err;}
//         );
//       }
//      });
//      res.end( JSON.stringify(newData));
//   });
// });

const server = app1.listen(8082, function () {
  const host = (server.address() as address).address;
  const port = (server.address() as address).port;
  console.log("Example app listening at http://%s:%s", host, port);
});
}

export default playlist;