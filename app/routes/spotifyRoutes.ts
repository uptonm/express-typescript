import axios, { AxiosInstance } from 'axios';
import * as tunnel from 'tunnel';
import express from 'express';

const router = express.Router();

const agent = tunnel.httpsOverHttp({
  proxy: {
    host: 'http.proxy.fmr.com',
    port: 8000,
  },
});
const axiosClient: AxiosInstance = axios.create({
  httpsAgent: agent,
  proxy: false,
});

router.get("/users/:id/spotify/last-played", async (req, res) => {
  // Find user get spotifyAccess token logic
  let data = await axiosClient.get("https://api.spotify.com/v1/me/player", {
    headers: {
      "Authorization": `Bearer ${process.env.SPOTIFYTEST}`,
      "Content-Type": "application/json"
    }
  });
  res.send(data)
});

export default router;