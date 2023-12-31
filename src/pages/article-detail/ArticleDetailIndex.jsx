import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import newsAPI from '../../api/newsAPI';

// import dateFormatting from '../../utils/dateFormatting';

import RelatedArticlesSection from './components/RelatedArticlesSection'

export default function ArticleDetailIndex() {
  const location = useLocation();
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);


  useEffect(() => {
    newsAPI.get('/news', {
      params: {
       category: 'entertainment',
       country: 'us',
       full_content: 1,
       image: 1,
       qInTitle: '"' + id + '"'
      }
    })
    .then(res => setArticle(res.data.results))
    .catch(err => console.error(err))
  }, [location.pathname])


  useEffect(() => {
    newsAPI.get('/news', {
        params: {
         category: 'entertainment',
         country: 'us',
         full_content: 1,
         image: 1,
         qInTitle: '"' + id + '"'
        }
      })
      .then(res => setArticle(res.data.results))
      .catch(err => console.error(err))
  }, [])


    return (
      <>
      {article.length > 0 && (
        <main className='max-w-screen-2xl mx-auto'>
            <h1 className='text-center text-white text-5xl max-w-6xl mx-auto pt-12'>{article[0].title || ""}</h1>
            <p className='text-center italic text-gray-500 mt-2'>Published at {article[0].pubDate || ""} by ICLIP Admin</p>
            <img src={article[0].image_url || ""} className='mx-auto max-w-6xl my-4 border border-0 rounded-2xl' alt="" />

            <section className='max-w-6xl mx-auto my-12 text-xl text-gray-300'>
                <p className='mb-3'>{article[0].description || ""}</p>
                <p className='mb-3'>{article[0].content || ""}</p>
            </section>

            <div className="w-6xl h-0.5 bg-gray-800"></div>

            <RelatedArticlesSection />
      
        </main>)}
      </>
    )
}