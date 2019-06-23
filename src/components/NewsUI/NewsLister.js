import React, { useState, useEffect } from 'react';
import { getNews } from '../../api/newsapi';
import NewsItem from './NewsItem';

function NewsLister({ country, query }) {
  const [loadingMore, setLoadingMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  const loadMore = () => {
    setLoadingMore(true)
    getNews(country, query, page)
      .then(async data => {
        await setNews([...news, ...data.data.articles])
        setLoadingMore(false)
        setPage(page + 1)
      })
      .catch(err => {
        console.log(err)
        alert('Out of pages...')
      })
  }

  useEffect(() => {
    setLoading(true);
    getNews(
      country,
      query
    )
      .then(async data => {
        console.log(data)
        await setNews(data.data.articles)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [country, query]);

  if (loading === true) {
    return <div className="text-center mt-10">Loading...</div>
  } else {
    const articles = news.map((article, index) => <NewsItem key={index} article={article} />)

    return (
      <>
        <main>{articles}</main>
        <div class="text-center">
          <button onClick={() => loadMore()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-10 px-4 rounded">
            Load More
          </button>
        </div>
      </>
    )
  }
}

export default NewsLister