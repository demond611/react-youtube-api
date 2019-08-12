import axios from 'axios';

const KEY = 'AIzaSyAcQA8upcKtcf2NcBQYNAPwrSAq1OgyiXQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});