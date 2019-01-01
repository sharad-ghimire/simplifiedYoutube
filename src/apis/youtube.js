// Pre configured instance of Axios that already has some baseurl and some default params loaded in
import axios from 'axios';

const KEY = 'AIzaSyC1mEddRRj6JHWsqYwaPWynWm2l0J9Y8cM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
