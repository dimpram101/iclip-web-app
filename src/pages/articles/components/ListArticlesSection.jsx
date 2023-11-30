import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ListArticlesSection({ articles }) {
  const navigate = useNavigate();

  const handleArticleClicked = (title) => {
    navigate(`/articles/${title}`)
  }

  return (
    <section className="mb-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {articles.slice(2).map((article, index) => (
        <div key={index} className="p-4 flex-1 shadow-lg shadow-black-500/50 hover:cursor-pointer"
          onClick={() => handleArticleClicked(article.title)}
        >
          <img
            src={article.image_url}
            className="flex-1 h-[200px] w-[100%] object-cover"
            alt=""
          />
          <h1 className="text-xl my-2 hover:underline hover:cursor-pointer">
            {article.title}
          </h1>
          <p>{article.pubDate}</p>
        </div>
      ))}
    </section>
  );
}

