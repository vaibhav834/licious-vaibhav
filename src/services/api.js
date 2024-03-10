
import axios from 'axios';
import { BASE_URL, PAGE_LIMIT } from '../helper/constants';

// export const getBooks = async (page) => {
//   try {
//     const response = await axios.get(`/search.json?q=book&sort=rating desc&page=${page}&limit=${PAGE_LIMIT}`, { baseURL:BASE_URL });
//     return response.data;
//   } catch (error) {
//     console.log(error)
//     throw error;
//   }
// };

export const searchBooks = async (query,page) => {
  try {
    const response = await axios({
        method:'get',
        baseURL:BASE_URL,
        url:'/search.json',
        params:{
            q:query?query:'book',// for default case, fetching random books
            page:page,
            limit:PAGE_LIMIT,
            sort: query ?undefined: 'rating desc', // for default case, sorting books by rating
        }
    })
    return response.data;
  } catch (error) {
    throw error;
  }
};
