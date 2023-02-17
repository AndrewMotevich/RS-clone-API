import { app, hash } from './authorization';
import { client } from './authorization';

function library() {

app.get("/allPlaylists", async function (req, res) {
  if (req.headers['admin-pass'] === 'root') {
    const usersArray = await client.db('podcastLibrary').collection('library').find().toArray();
    res.end(JSON.stringify(usersArray));
} else {
    res.status(500);
    res.end('!!!Get out intruder!!!');
}
});

// app.post('/addUserLibrary',async function (req, res) {
//   if (req.cookies['is-logged-in'] === 'false' && hash(req.params.email)) {
//       const reqData = req.body as user;
//       //check email
//       await findOneByUserName(reqData.email).then(async (data) => {
//           if (data === null && Object.keys(reqData).length === 4) {
//               await client.db('myDatabase').collection('users').insertOne(reqData);
//               res.end(JSON.stringify(reqData));
//           } else {
//               res.status(500);
//               res.end('This user exist');
//           }
//       });
//   } else {
//       res.status(500);
//       res.end('You are logged in, please, sign out');
//   }
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
}

export default library;