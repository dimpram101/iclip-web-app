import React, { useEffect, useState } from 'react'
import newsAPI from '../../../api/newsAPI';
import { Link } from 'react-router-dom';


export default function RelatedArticlesSection() {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    newsAPI.get('/news', {
          params: {
           category: 'entertainment',
          //  language: 'english',
           country: 'us',
           full_content: 1,
           image: 1,

          }
        })
        .then(res => setArticles(res.data.results))
        .catch(err => console.error(err))
  }, [])


  const handleArticleClick = (title) => {
    navigation(`/articles/${title}`);
  };


  return (
    <section>

    <h2 className='text-secondary text-3xl my-6'>Related Articles</h2>
    
    <div className="mb-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-x-auto">
    {articles.map(article => (
      <Link to={`/articles/${article.title}`} key={article.article_id} className="p-4 flex-1 shadow-lg shadow-black-500/50 hover:cursor-pointer">
          <img
          src={article.image_url}
          className="flex-1 h-[200px] w-[100%] object-cover"
          alt=""
          />
          <h1 className="text-xl my-2 hover:underline hover:cursor-pointer">
          {article.title}
          </h1>

          <p>{article.pubDate}</p>
      
      </Link>
    ))} 
    </div>


    </section>
  )
}
