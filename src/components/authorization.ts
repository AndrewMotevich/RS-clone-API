import { user, address } from './type';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { MongoClient } from 'mongodb';

const cloudURI =
    'mongodb+srv://vercel-admin-user:MCm8xsb6HBmZkcGP@cluster0.b23op1h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(cloudURI);

function authorization() {
    const app = express();
    const corsOptions = {
        origin: 'http://127.0.0.1:5500',
        credentials: true,
    };
    const findOneByUserName = async (userName: string) => {
        return await client
            .db('myDatabase')
            .collection('users')
            .findOne({ userName: `${userName}` });
    };

    const hash = (string: string) => {
        let result = 0;
        for (let i = 0; i < string.length; i++) {
            result += string.charCodeAt(i) + 7;
        }
        return result.toString();
    };

    app.use(express.json());
    app.use(cors(corsOptions));
    app.use(cookieParser());

    app.get('/listUsers', async function (req, res) {
        if (req.headers['admin-pass'] === 'root') {
            const usersArray = await client.db('myDatabase').collection('users').find().toArray();
            res.end(JSON.stringify(usersArray));
        } else {
            res.status(500);
            res.end('!!!Get out intruder!!!');
        }
    });

    app.post('/addUser', function (req, res) {
        if (req.cookies['is-logged-in'] === 'false') {
            const reqData = req.body as user;
            //check email
            findOneByUserName(reqData.email).then(async (data) => {
                if (data != null && Object.keys(reqData).length === 4) {
                    await client.db('myDatabase').collection('users').insertOne(reqData);
                    res.end(JSON.stringify(reqData));
                } else {
                    res.status(500);
                    res.end('This user exist');
                }
            });
        } else {
            res.status(500);
            res.end('You are logged in, please, sign out');
        }
    });

    app.get('/:email', async function (req, res) {
        const user = await client
            .db('myDatabase')
            .collection('users')
            .findOne({ userName: `${req.params.email}` });
        try {
            if (user === null) {
                res.status(404);
                res.end('This user do not exist or incorrect email');
            } else {
                if (
                    req.cookies['email'] != undefined &&
                    req.cookies['email'] === hash(req.params.email).toString() &&
                    req.cookies['is-logged-in'] === 'true'
                ) {
                    console.log('Get from cookies: ', req.cookies);
                    res.end(JSON.stringify(user));
                } else {
                    const userHashPassword = hash(user.userPassword);
                    if (req.headers['hash-pass'] === userHashPassword) {
                        res.cookie('email', `${hash(req.params.email)}`);
                        res.cookie('is-logged-in', 'true');
                        res.cookie('id', `${user._id}`);
                        res.end(JSON.stringify(user));
                    }
                    else {
                        res.status(500);
                        res.end('Incorrect password');
                    }
                }
            }
        } catch (err) {
            res.status(500);
            res.end(err);
        }
    });

    // app.delete('/deleteUser/:id', function (req, res) {
    //     if (req.cookies['is-logged-in'] === 'true' && req.cookies['id'] === req.params.id.toString()) {
    //         fs.readFile(pathToBuild + 'users.json', 'utf8', function (err, data) {
    //             const newData = JSON.parse(data) as user[];
    //             newData.forEach((elem, index) => {
    //                 if (elem.id == Number(req.params.id)) {
    //                     newData.splice(index, 1);
    //                     fs.writeFile(pathToBuild + 'users.json', JSON.stringify(newData), {}, (err) => {
    //                         return err;
    //                     });
    //                 }
    //             });
    //             res.end(JSON.stringify(newData));
    //         });
    //     } else {
    //         res.status(500);
    //         res.end('You are not logged in or incorrect id');
    //     }
    // });

    // app.patch('/updateUser', function (req, res) {
    //     const reqData = req.body as user;
    //     if (req.cookies['is-logged-in'] === 'true' && req.cookies['id'] === reqData.id.toString()) {
    //         fs.readFile(pathToBuild + 'users.json', 'utf8', function (err, data) {
    //             try {
    //                 const newData = JSON.parse(data) as user[];
    //                 let exist = false;
    //                 newData.forEach((elem) => {
    //                     if (elem.email === reqData.email && elem.id !== reqData.id) {
    //                         res.status(500);
    //                     } else if (elem.id === reqData.id) {
    //                         elem.email = reqData.email;
    //                         elem.phone = reqData.phone;
    //                         elem.userName = reqData.userName;
    //                         elem.userPassword = reqData.userPassword;
    //                         exist = true;
    //                     }
    //                 });
    //                 if (exist === false || res.statusCode === 500) {
    //                     res.status(500);
    //                     res.end("This user don't exist");
    //                 } else {
    //                     fs.writeFile(pathToBuild + 'users.json', JSON.stringify(newData), {}, (err) => {
    //                         return err;
    //                     });
    //                     res.end(JSON.stringify(newData));
    //                 }
    //             } catch (err) {
    //                 return err;
    //             }
    //         });
    //     } else {
    //         res.status(500);
    //         res.end('You are not logged in or incorrect logged in user(you cant update other users)');
    //     }
    // });

    const server = app.listen(8081, function () {
        const host = (server.address() as address).address;
        const port = (server.address() as address).port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
}

export default authorization;
