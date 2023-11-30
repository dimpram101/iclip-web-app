import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import newsAPI from '../../api/newsAPI';

// import dateFormatting from '../../utils/dateFormatting';

import RelatedArticlesSection from './components/RelatedArticlesSection'

export default function ArticleDetailIndex() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    // newsAPI.get('/news', {
    //     params: {
    //      category: 'entertainment',
    //      country: 'us',
    //      full_content: 1,
    //      image: 1,
    //      qInTitle: "1 Actor Auditioned to Play Both Harry Potter & Edward in 'Twilight' But Got Different Roles in the Franchises"
    //     }
    //   })
    //   .then(res => setArticle(res.data.results[0]))
    //   .catch(err => console.error(err))
  }, [])

  console.log("ISI ARTIKEL", article);

    return (
        <main className='max-w-screen-2xl mx-auto'>
            {/* <h1 className='text-center text-white text-5xl max-w-6xl mx-auto pt-12'>{article.title}</h1>
            <p className='text-center italic text-gray-500 mt-2'>Published at {article.pubDate} by ICLIP Admin</p>
            <img src={article.image_url} className='mx-auto max-w-6xl my-4 border border-0 rounded-2xl' alt="" />

            <section className='max-w-6xl mx-auto my-12 text-xl text-gray-300'>
                <p className='mb-3'>{article.description}</p>
                <p className='mb-3'>{article.content}</p>
            </section> */}

            <div className="w-6xl h-0.5 bg-gray-800"></div>

            <RelatedArticlesSection />
        

        </main>
    )
}
