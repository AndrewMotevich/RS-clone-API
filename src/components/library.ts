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
  
  app.patch('/addNewPlaylist/:email/:playlistName', async function (req, res) {
  const checkLikedPodcasts = req.params.playlistName != "likedPodcasts"; 
  const checkSubscribedPodcasts = req.params.playlistName != 'subscribedPodcasts';
  if (req.cookies['is-logged-in'] === 'true' && req.cookies['email'] === hash(req.params.email) && checkSubscribedPodcasts && checkLikedPodcasts){
    const newPlaylist = {};
    Object.defineProperty(newPlaylist, `${req.params.playlistName}`, []);
    await client.db('podcastLibrary').collection('library').updateOne({"email": `${req.params.email}`},{$set : newPlaylist });
    res.end(`Playlist ${req.params.playlistName} was added`);
  }
  else {
    res.status(500);
    res.end('You are not logged in or incorrect email');
}
});


}

export default library;