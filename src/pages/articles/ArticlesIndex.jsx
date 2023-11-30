import React, { useEffect, useState } from 'react'
import newsAPI from '../../api/newsAPI'
import HeadlineSection from './components/HeadlineSection';
import ListArticlesSection from './components/ListArticlesSection';
import FilteringNewsSection from './components/FilteringNewsSection';

export default function ArticlesIndex() {

  const [articles, setArticles] = useState([]);
  
  // useEffect(() => {
  //   newsAPI.get('/news', {
  //     params: {
  //      category: 'entertainment',
  //     //  language: 'english',
  //      country: 'us',
  //      full_content: 1,
  //      image: 1,
  //     }
  //   })
  //   .then(res => setArticles(res.data.results))
  //   .catch(err => console.error(err))
  // }, [])

  // TEST LUARAN DATA
  useEffect(() => {
    console.log("DATANYA DISINI", articles);
  }, [articles])

  return (
    <main>
      <HeadlineSection />
      <FilteringNewsSection />
      <ListArticlesSection />
    </main>
  )
}
