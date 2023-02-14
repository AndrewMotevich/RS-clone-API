import { user, address } from './type';
import * as fs from 'fs';
import express from 'express';
import * as path from 'path';

function authorization() {
const app = express();
const pathToBuild = path.resolve() + "\\build\\resources\\";

// const hash = (string: string) => {
//   let result = 0;
//   for (let i = 0; i < string.length; i++) {
//       result += string.charCodeAt(i)+7;
//   }
//   return result;
// };

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
      const newData = JSON.parse(data) as user[];
      const newId = newData[`${newData.length - 1}`].id + 1;
      newData.forEach(elem => {
        if (elem.email === reqData.email) {
          res.status(500);
          res.end('THIS EMAIL EXIST');
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

app.get("/:email", function (req, res) {
  // First read existing users.
  fs.readFile(pathToBuild + "users.json", "utf8", function (err, data) {
    const users = JSON.parse(data) as user[];
    let user = {};
    users.forEach((elem) => {
      if ((elem.email == req.params.email)) {
        user = elem;
      }
    });
    if (Object.keys(user).length === 0) {
      res.status(404);
      res.end('Not such user or incorrect email');
    }
    else {
      res.end(JSON.stringify(user));
    }
  });
});

app.delete('/deleteUser/:id', function (req, res) {
  // First read existing users.
  fs.readFile(pathToBuild + "users.json", 'utf8', function (err, data) {
     const newData = JSON.parse( data ) as user[];
     newData.forEach((elem, index) => {
       if (elem.id == Number(req.params.id)){
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
  const host = (server.address() as address).address;
  const port = (server.address() as address ).port;
  console.log("Example app listening at http://%s:%s", host, port);
});
}

export default authorization;