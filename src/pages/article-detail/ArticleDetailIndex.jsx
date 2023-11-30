import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleDetailIndex() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  

  
  
    return (
    <main className='max-w-screen-2xl mx-auto'>
        <h1 className='text-center text-white text-5xl max-w-6xl mx-auto pt-12'>Toy Story 4 Producer Announce Release Data in Some Asian Country</h1>
        <p className='text-center italic text-gray-500'>Published at 12 January 2023 by ICLIP Admin</p>
        <img src="https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='mx-auto max-w-6xl my-4 border border-0 rounded-2xl' alt="" />

        <section className='max-w-6xl mx-auto my-12 text-xl text-gray-300'>
            <p className='mb-3'>Toy Story fans in select Asian countries are eagerly anticipating the release of the highly anticipated Toy Story 4, as the producers recently announced the official release date for these regions. The beloved franchise, known for its heartwarming storytelling and iconic characters, has garnered a global fanbase since its inception. With this announcement, fans in Asia can now mark their calendars and prepare for the return of Woody, Buzz Lightyear, and the rest of the Toy Story gang.</p>

            <p className='mb-3'>he decision to release Toy Story 4 in specific Asian countries is part of the film's strategic international rollout. Producers aim to ensure that audiences across the globe can experience the magic of Toy Story on the big screen simultaneously. This approach not only caters to the existing fanbase but also introduces the enchanting world of Toy Story to new audiences, fostering a sense of excitement and anticipation.</p>

            <p className='mb-3'>The Toy Story franchise has always been celebrated for its universal themes and relatable characters that resonate with audiences of all ages. As the release date approaches in these select Asian countries, discussions and speculations about the plot, new characters, and potential surprises are gaining momentum. The Toy Story 4 team is keen on delivering a memorable cinematic experience that will capture the hearts of both longtime fans and newcomers alike.</p>

            <p className='mb-3'>In addition to the joyous anticipation among fans, the announcement of the release date in these Asian countries highlights the global appeal of animated storytelling. Toy Story 4 is not just a movie; it's a cultural phenomenon that transcends borders, bringing people together through the shared experience of laughter, tears, and the timeless magic of toys coming to life on the silver screen.</p>
        </section>

        <div className="w-6xl h-0.5 bg-gray-800"></div>


        <section>
            <h2 className='text-secondary text-3xl my-6'>Related Articles</h2>
            
            <div className="mb-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="p-4 flex-1 shadow-lg shadow-black-500/50 hover:cursor-pointer">
                <img
                src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="flex-1 h-[200px] w-[100%]"
                alt=""
                />
                <h1 className="text-xl my-2 hover:underline hover:cursor-pointer">
                Tiffany Haddish DUI: Comedian says she will get help after driving under influence arrest
                </h1>

                <p>23 November 2023</p>
            
            </div>
            ))}
            </div>


        </section>

    </main>
    )
}
