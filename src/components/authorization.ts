import { user, address } from './type';
import * as fs from 'fs';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as path from 'path';

function authorization() {
    const app = express();
    // const pathToBuild = path.resolve() + '\\build\\resources\\';
    const pathToBuild = path.resolve();

    const hash = (string: string) => {
        let result = 0;
        for (let i = 0; i < string.length; i++) {
            result += string.charCodeAt(i) + 7;
        }
        return result;
    };

    const corsOptions = {
        origin: 'http://127.0.0.1:5500',
        credentials: true,
    };

    app.use(express.json());
    app.use(cors(corsOptions));
    app.use(cookieParser());

    app.get('/listUsers', function (req, res) {
      if (req.headers['admin-pass'] === "root"){
        fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
            console.log(data);
            console.log(__dirname);
            res.end(data);
        });
      }
      else {
        res.status(500);
        res.end('!!!Get out intruder!!!');
      }
    });

    app.post('/addUser', function (req, res) {
      if(req.cookies['is-logged-in'] === 'false'){
        // First read existing users.
        const reqData = req.body;
        fs.readFile(pathToBuild + 'users.json', 'utf8', function (err, data) {
            try {
                const newData = JSON.parse(data) as user[];
                const newId = newData[`${newData.length - 1}`].id + 1;
                newData.forEach((elem) => {
                    if (elem.email === reqData.email) {
                        res.status(500);
                        res.end('THIS EMAIL EXIST');
                    }
                });
                reqData.id = newId;
                newData.push(reqData);
                res.cookie("email", `${hash(reqData.email)}`);
                res.cookie("is-logged-in", "true");
                res.cookie("id", `${reqData.id}`);
                fs.writeFile(pathToBuild + 'users.json', JSON.stringify(newData), {}, (err) => {
                    return err;
                });
                res.end(JSON.stringify(newData));
            } catch (err) {
                return err;
            }
        });
      }
      else {
        res.status(500);
        res.end('You are logged in, please, sign out');
      }
    });

    app.get('/:email', function (req, res) {
        // First read existing users.
        fs.readFile(pathToBuild + 'users.json', 'utf8', function (err, data) {
            const users = JSON.parse(data) as user[];
            let user = {};
            users.forEach((elem) => {
                if (elem.email === req.params.email) {
                    if (
                        req.cookies['email'] != undefined &&
                        req.cookies['email'] === hash(req.params.email).toString()
                    ) {
                        user = elem;
                        console.log('From cookies: ', req.cookies);
                    } else {
                        const elemHash = hash(elem.userPassword);
                        if (Number(req.headers['hash-pass']) === elemHash) {
                            res.cookie("email", `${hash(req.params.email)}`);
                            res.cookie("is-logged-in", "true");
                            res.cookie("id", `${elem.id}`);
                            user = elem;
                        } else {
                            res.status(500);
                        }
                    }
                }
            });
            if (Object.keys(user).length === 0) {
                if (res.statusCode === 500) {
                    res.end('Incorrect password');
                } else {
                    res.status(404);
                    res.end('Not such user or incorrect email');
                }
            } else {
                res.end(JSON.stringify(user));
            }
        });
    });

    app.delete('/deleteUser/:id', function (req, res) {
        // First read existing users.
        if(req.cookies['is-logged-in'] === 'true' && req.cookies['id'] === req.params.id.toString()){
          fs.readFile(pathToBuild + 'users.json', 'utf8', function (err, data) {
              const newData = JSON.parse(data) as user[];
              newData.forEach((elem, index) => {
                  if (elem.id == Number(req.params.id)) {
                      newData.splice(index, 1);
                      fs.writeFile(pathToBuild + 'users.json', JSON.stringify(newData), {}, (err) => {
                          return err;
                      });
                  }
              });
              res.end(JSON.stringify(newData));
          });
        }
        else {
          res.status(500);
          res.end('You are not logged in or incorrect id');
        }
    });

    app.patch('/updateUser', function (req, res) {
      const reqData = req.body as user;
      if(req.cookies['is-logged-in'] === 'true' && req.cookies['id'] === reqData.id.toString()){
        fs.readFile(pathToBuild + 'users.json', 'utf8', function (err, data) {
            try {
                const newData = JSON.parse(data) as user[];
                let exist = false;
                newData.forEach((elem) => {
                    if (elem.email === reqData.email && elem.id !== reqData.id) {
                        res.status(500);
                    } else if (elem.id === reqData.id) {
                        elem.email = reqData.email;
                        elem.phone = reqData.phone;
                        elem.userName = reqData.userName;
                        elem.userPassword = reqData.userPassword;
                        exist = true;
                    }
                });
                if (exist === false || res.statusCode === 500) {
                    res.status(500);
                    res.end("This user don't exist");
                } else {
                    fs.writeFile(pathToBuild + 'users.json', JSON.stringify(newData), {}, (err) => {
                        return err;
                    });
                    res.end(JSON.stringify(newData));
                }
            } catch (err) {
                return err;
            }
        });
      }
      else {
        res.status(500);
        res.end('You are not logged in or incorrect logged in user(you cant update other users)');
      }
    });

    const server = app.listen(8081, function () {
        const host = (server.address() as address).address;
        const port = (server.address() as address).port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
}

export default authorization;