import axios from "axios";

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

export const getImages = async (query) => {
  console.log("in getImages");
  return await axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
  );
};
