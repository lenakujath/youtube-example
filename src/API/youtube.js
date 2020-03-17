import axios from 'axios';
//there must not be made no push as long as the key is visible in this file
const KEY = '';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})