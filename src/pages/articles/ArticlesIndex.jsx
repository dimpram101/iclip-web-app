import React, { useEffect, useState } from 'react'
import newsAPI from '../../api/newsAPI'
import HeadlineSection from './components/HeadlineSection';
import ListArticlesSection from './components/ListArticlesSection';
import FilteringNewsSection from './components/FilteringNewsSection';

export default function ArticlesIndex() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);

    newsAPI.get('/news', {
      params: {
       category: 'entertainment',
      //  language: 'english',
       country: 'us',
       full_content: 1,
       image: 1,
       q: 'movie release'
      }
    })
    .then(res => {
      setArticles(res.data.results);
      setIsLoading(false);
    })
    .catch(err => console.error(err))
  }, [])

  
  return (
    <main>
      <FilteringNewsSection />
      <HeadlineSection firstHeadline={articles[0]} secondHeadline={articles[1]} isLoading={isLoading} />
      <ListArticlesSection articles={articles} />
    </main>
  )
}
