import axios from 'axios'
import express from 'express';

const router = express.Router();

router.get("/users/:id/spotify/last-played", async (req, res) => {
  // Find user get spotifyAccess token logic
  let data = await axios({
    method: "get",
    url: `https://api.spotify.com/v1/me/player/recently-played`,
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFYTEST}`,
      "Content-Type": "application/json"
    }
  });
  res.send(data)
});

export default router;