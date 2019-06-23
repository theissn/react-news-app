import axios from 'axios'
const { REACT_APP_API_KEY } = process.env

export const getNews = (country, query, page = 1) => {
  const url = query !== '' ? 'https://newsapi.org/v2/everything' : 'https://newsapi.org/v2/top-headlines'

  return axios.get(url, {
    params: {
      ...(!query && { country }),
      ...(query && { q: query }),
      apiKey: REACT_APP_API_KEY,
      page,
    }
  })
}