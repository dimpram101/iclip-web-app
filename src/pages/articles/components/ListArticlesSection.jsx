import React from 'react'

export default function ListArticlesSection() {
  return (
    <section className="mb-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
    {Array.from({ length: 8 }).map((_, index) => (
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
  </section>
  )
}
