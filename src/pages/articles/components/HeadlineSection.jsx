import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HeadlineSection({ firstHeadline = {}, secondHeadline = {}, isLoading }) {
  const navigation = useNavigate();

  const handleArticleClicked = (title) => {
    navigation(`/articles/${title}`)
  }


  function limitWords(description, limit) {
    const words = description.split(' ');
  
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return description;
    }
  }

  const LoadingSkeleton = () => (
    <>
        <div className='flex-4 flex w-[70%] p-4 mr-8 flex shadow-lg shadow-black-500/50 border border-primary shadow'>
        <div className='flex-1 flex-col mr-3 max-w-lg animate-pulse'>
          <div className='h-16 w-[100%] bg-primary mb-2'></div>
          <div className='h-16 w-[75%] bg-primary mb-8'></div>

          <div className='h-4 w-[100%] bg-primary mb-2'></div>
          <div className='h-4 w-[80%] bg-primary mb-2'></div>
          <div className='h-4 w-[60%] bg-primary mb-2'></div>
          <div className='h-4 w-[40%] bg-primary mb-2'></div>

          <div className='h-4 w-[100%] bg-primary mb-2 mt-4'></div>
          <div className='h-4 w-[80%] bg-primary mb-2'></div>
          <div className='h-4 w-[60%] bg-primary mb-2'></div>
          <div className='h-4 w-[40%] bg-primary mb-2'></div>
        </div>
        <div className='flex-1 h-[400px] max-w-xl animate-pulse bg-primary'></div>
      </div>


      <div class="border border-primary shadow rounded-md p-4 max-w-sm w-full mx-auto shadow-black-500/50">
        <div class="animate-pulse flex flex-col ">
          <div class="bg-primary h-[200px] w-[100%]"></div>
          <div class="flex-1 flex-end py-1">
            <div class="h-6 rounded my-2 bg-primary"></div>
            <div class="h-6 rounded mr-8 bg-primary"></div>

            <div class="space-y-3 mt-12">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-primary rounded col-span-2"></div>
                <div class="h-2 bg-primary rounded col-span-1"></div>
                <div class="h-2 bg-primary rounded col-span-2"></div>
                <div class="h-2 bg-primary rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-primary rounded"></div>
              <div class="h-2 bg-primary rounded"></div>
              <div class="h-2 bg-primary rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <section className='flex flex-col md:flex-row lg:h-[70vh] max-w-screen-2xl mx-auto py-12 gap-4'>

      {isLoading ? (
        <LoadingSkeleton />
      ): (
        <>
          <div className='lg:flex-4 py-8 px-2 md:mr-8 flex shadow-lg shadow-black-500/50 flex flex-col md:flex-row' onClick={() => handleArticleClicked(firstHeadline.title)}>
            <div className='flex flex-col mr-3 max-w-lg' >
              <h1 className='text-4xl mb-2 underline underline-offset-4 hover:cursor-pointer'>
                {firstHeadline.title || ""}
              </h1>
              <p className='flex-1 text-lg text-slate-400 hidden md:block'>
                {limitWords(firstHeadline.description, 80) || ""}
              </p>

              <p className='flex-1 text-md text-slate-400 md:hidden'>
                {limitWords(firstHeadline.description, 20) || ""}
              </p>

            </div>
            <img src={firstHeadline.image_url || ""} className='flex-1 lg:h-[400px] object-cover max-w-xl' alt="" />
          </div>

          <div className='lg:flex-1 lg:w-[30%]  py-8 px-2  shadow-lg shadow-black-500/50' onClick={() => handleArticleClicked(secondHeadline.title)}>
            <img src={secondHeadline.image_url || ""} className='flex-1 lg:h-[200px] lg:w-[100%] object-cover' alt="" />
            <h1 className='text-2xl my-2 hover:underline hover:cursor-pointer'>
              {secondHeadline.title || ""}
            </h1>
            <p className='text-slate-400 text-lg hidden md:block'>
              {limitWords(secondHeadline.description, 30) || ""}
            </p>

            <p className='flex-1 text-md text-slate-400 md:hidden'>
                {limitWords(firstHeadline.description, 15) || ""}
              </p>

          </div>
        </>
      )}

    </section>
  );
}

