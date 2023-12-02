import React, { useEffect, useState } from 'react'
import newsAPI from '../../api/newsAPI'
import HeadlineSection from './components/HeadlineSection';
import ListArticlesSection from './components/ListArticlesSection';
import FilteringNewsSection from './components/FilteringNewsSection';

export default function ArticlesIndex() {

  const [searchQuery, setSearchQuery] = useState('movie release')
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
       q: searchQuery
      }
    })
    .then(res => {
      setArticles(res.data.results);
      setIsLoading(false);
    })
    .catch(err => console.error(err))
  }, [searchQuery])

  
  console.log(searchQuery);


  return (
    <main className='p-6'>
      <FilteringNewsSection setSearchQuery={setSearchQuery} />
      <HeadlineSection firstHeadline={articles[0]} secondHeadline={articles[1]} isLoading={isLoading} />

      <section className='max-w-screen-2xl mx-auto'>
        <div className="w-6xl h-0.5 bg-gray-800"></div>
        <h2 className='text-secondary text-3xl my-6'>Top News</h2>
      </section>

      <ListArticlesSection articles={articles} />
    </main>
  )
}
