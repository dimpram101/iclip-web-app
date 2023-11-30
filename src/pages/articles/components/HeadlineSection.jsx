import React from 'react'

export default function HeadlineSection() {
  return (
    <section className='flex flex-col md:flex-row h-[70vh]  max-w-screen-2xl mx-auto py-12'>

    <div className='flex-4 w-[70%] p-4 mr-8 flex shadow-lg shadow-black-500/50'>

      <div className='flex flex-col mr-3'>
          <h1 className='text-4xl mb-2 underline underline-offset-4 hover:cursor-pointer'>
            Tiffany Haddish DUI: Comedian says she will get help after driving under influence arrest
          </h1>
          <p className='flex-1 text-lg text-slate-400'>
          Tiffany Haddish DUI: Comedian says she will get help after driving under influence arrest Published 10 hours ago Share close panel Share page Copy link About sharing Image source, Getty Images Image caption, Tiffany Haddish had been performing in Los Angeles a day before her arrest By Andre Rhoden-Paul BBC News Tiffany Haddish has said she is \"going to get some help\" after she was arrested on suspicion of driving under the influence.
          
           
          </p>
      </div>

      <img src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='flex-1 h-[400px]' alt="" />

    </div>

    <div className='flex-1 w-[30%] shadow-lg shadow-black-500/50'>
    <img src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='flex-1 h-[200px] w-[100%]' alt="" />
    <h1 className='text-2xl my-2 hover:underline hover:cursor-pointer'>
            Tiffany Haddish DUI: Comedian says she will get help after driving under influence arrest
    </h1>
    <p className='text-slate-400 text-lg'>
    Tiffany Haddish DUI: Comedian says she will get help after driving under influence arrest Published 10 hours ago Share close panel Share page Copy link About sharing Image source, Getty Images Image caption
    </p>

    </div>
   
    </section>

  )
}
