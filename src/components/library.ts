import { app, hash } from './authorization';
import { client } from './authorization';

function library() {
    function checkStatePlaylists(playlist: string) {
        const checkLikedPodcasts = playlist != 'likedPodcasts';
        const checkSubscribedPodcasts = playlist != 'subscribedPodcasts';
        if (checkSubscribedPodcasts && checkLikedPodcasts) return true;
        else return false;
    }

    app.get('/allPlaylists', async function (req, res) {
        if (req.headers['admin-pass'] === 'root') {
            const usersArray = await client.db('podcastLibrary').collection('library').find().toArray();
            res.end(JSON.stringify(usersArray));
        } else {
            res.status(500);
            res.end('!!!Get out intruder!!!');
        }
    });

    app.patch('/addNewPlaylist/:email/:playlistName', async function (req, res) {
        if (
            req.cookies['is-logged-in'] === 'true' &&
            req.cookies['email'] === hash(req.params.email) &&
            checkStatePlaylists(req.params.playlistName)
        ) {
            const newPlaylist = {};
            Object.defineProperty(newPlaylist, `${req.params.playlistName}`, []);
            await client
                .db('podcastLibrary')
                .collection('library')
                .updateOne({ email: `${req.params.email}` }, { $set: newPlaylist });
            res.end(`Playlist ${req.params.playlistName} was added`);
        } else {
            res.status(500);
            res.end('You are not logged in or incorrect email');
        }
    });

    app.patch('/renamePlaylist/:email/:playlistName/:newPlaylistName', async function (req, res) {
        if (
            req.cookies['is-logged-in'] === 'true' &&
            req.cookies['email'] === hash(req.params.email) &&
            checkStatePlaylists(req.params.playlistName)
        ) {
            const newNameObj = {};
            Object.defineProperty(newNameObj, `${req.params.playlistName}`, `${req.params.newPlaylistName}`);
            await client
                .db('podcastLibrary')
                .collection('library')
                .updateMany({ email: `${req.params.email}` }, { $rename: newNameObj });
            res.end(`Playlist ${req.params.playlistName} was renamed to ${req.params.newPlaylistName}`);
        } else {
            res.status(500);
            res.end('You are not logged in or incorrect email');
        }
    });

    app.post('/addItemToPlaylist/:email/:playlistName/:itemId', async function (req, res) {
        if (req.cookies['is-logged-in'] === 'true' && req.cookies['email'] === hash(req.params.email)) {
            const newItem = {};
            const itemIdObj = { id: `${req.params.itemId}` };
            Object.defineProperty(newItem, `${req.params.playlistName}`, itemIdObj);
            await client
                .db('podcastLibrary')
                .collection('library')
                .updateMany({ email: 'kshusha@gmail.com' }, { $addToSet: newItem });
            res.end(`Item with id:${req.params.itemId} was added`);
        } else {
            res.status(500);
            res.end('You are not logged in or incorrect email');
        }
    });
}

export default library;
