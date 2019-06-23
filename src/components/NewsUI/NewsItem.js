import React from 'react';
import NewsImage from './NewsImage';


function NewsItem({ article }) {

  const desc = article.description
    ? `${article.description.slice(0, 120)}...`
    : '';

  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      <div className="max-w-sm mx-auto my-10 rounded overflow-hidden shadow-lg">
        <NewsImage image={article.urlToImage} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{article.title}</div>
          <p className="text-gray-700 text-base">
            {desc}
          </p>
        </div>
      </div>
    </a>
  )
}

export default NewsItem;