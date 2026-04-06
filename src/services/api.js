import axios from "axios";

const api = axios.create({
    baseURL:'https://api.imdbapi.dev/'
})

export const getTitle = async()=>{
    try {
        const data = await api.get('/titles')
        return data
    } catch (error) {
        console.log(error);
    }
}
export const searchTitles = async (query) => {
  return api.get('/search/titles', {
    params: { query }
  });
};