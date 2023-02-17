import { address } from './type';
import express from 'express';

function playlist() {
const app1 = express();

app1.use(express.json());

// app1.get("/allPlaylists", function (req, res) {
//   fs.readFile(pathToBuild + "playlists.json", "utf8", function (err, data) {
//     res.end(data);
//   });
// });

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

// app1.get("/:id/:playlist", function (req, res) {
//   // First read existing users.
//   fs.readFile(pathToBuild + "playlists.json", "utf8", function (err, data) {
//     // const users = JSON.parse(data);
//     // let user = {};
//     // users.forEach((elem) => {
//     //   if ((elem.id = req.params.id)) {
//     //     user = elem;
//     //   }
//     // });
//     console.log(req.params);
//     res.end(JSON.stringify(req.params));
//   });
// });

const server = app1.listen(8082, function () {
  const host = (server.address() as address).address;
  const port = (server.address() as address).port;
  console.log("Example app listening at http://%s:%s", host, port);
});
}

export default playlist;