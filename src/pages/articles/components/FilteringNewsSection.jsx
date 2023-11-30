import React, { useState } from 'react';

import newsAPI from '../../../api/newsAPI';

export default function FilteringNewsSection() {
    const [searchKey, setSearchKey] = useState("");

    const handleInputChange = (evt) => {
        setSearchKey(evt.target.value);
      }
    
    
    const handleNewsSearching = () => {
          newsAPI.get('/news', {
            params: {
             category: 'entertainment',
             country: 'us',
             full_content: 1,
             image: 1,
             qInTitle: searchKey
            }
          })
          .then(res => console.log(res.data.results))
          .catch(err => console.error(err))
      }



  return (
    <section className='max-w-screen-2xl mx-auto my-12 py-6 flex justify-end '>
    <form className='flex justify-center items-center'>
      <div class="mr-2">
        <label for="search" class="block text-gray-600 text-sm font-medium hidden">Search News</label>
        <input
          type="text"
          id="search"
          name="search"
          class="p-2 w-full border rounded-md bg-primary outline-none"
          placeholder="Enter your search term"
          onChange={handleInputChange}
        />
      </div>

      <button
        type="button"
        onClick={handleNewsSearching}
        class="bg-secondary text-white px-4 py-2 rounded-md hover:cursor-pointer"
      >
        Search
      </button>
        </form>
    </section>
  )
}
