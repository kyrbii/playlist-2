const dataStore = require("./data-store.js");
const dataStoreClient = dataStore.getDataStore();
const logger = require("../utils/logger.js");

const playlistStore = {
  async getPlaylist(id) {
    const query = 'SELECT * FROM playlist_playlists WHERE id=$1';
    const values = [id];
    try {
      let result = await dataStoreClient.query(query, values);
      return result.rows[0];
    } catch (e) {
      logger.error("Error fetching playlist", e);
    }
  },
  async getAllPlaylists() {
    const query = 'SELECT * FROM playlist_playlists';
    try {
      let result = await dataStoreClient.query(query);
      return result.rows;
    } catch (e) {
      logger.error("Error fetching all playlists", e);
    }
  },
  async addPlaylist(playList) {
    try {
      const query = 'INSERT INTO playlist_playlists (TITLE) VALUES($1)';
      const values = [playList.title];
      await dataStoreClient.query(query, values);
    } catch (e) {
      logger.error("Error cannot add playlist", e);
    }
  },
  
};

module.exports = playlistStore;
