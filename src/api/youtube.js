import axios from 'axios';
import config from '../config';

const youtube = config.youtube_api_key;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: youtube
  }
});