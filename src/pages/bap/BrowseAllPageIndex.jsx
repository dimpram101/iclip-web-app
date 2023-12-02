import React, { useState, useEffect } from 'react';
import './components/scroll.css'

const BrowseAllPage = () => {
  const [images, setImages] = useState([]);
  const [genres, setGenres] = useState([]);
  

  useEffect(() => {
    // Fetch movie data
    fetch(`${REACT_APP_BASEURL}/discover/movie?api_key=${REACT_APP_APIKEY}`)
      .then(response => response.json())
      .then(data => {
        const fetchedImages = data.results.map(movie => ({
          id: movie.id,
          url: `${REACT_APP_BASEIMGURL}${movie.poster_path}`,
          title: movie.title,
          genre_ids: movie.genre_ids, // Add genre_ids to the movie object
        }));
        setImages(fetchedImages);
      });
  
    // Fetch genre data
    fetch(`${REACT_APP_BASEURL}/genre/movie/list?api_key=${REACT_APP_APIKEY}`)
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres);
      });
  }, []);

  const handleImageClick = (imageId, title) => {
    console.log(`Movie titled "${title}" with ID ${imageId} was clicked`);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Popular Movies Section */}
      <div className="flex flex-wrap justify-center">
        {images.slice(0, 3).map((image) => (
          <div key={image.id} className="w-1/4 p-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto transform hover:scale-105 transition duration-300"
                onClick={() => handleImageClick(image.id, image.title)}
              />
              <div className="p-4">
                <h3 className="text-xl text-white">{image.title}</h3>
                <div className="text-yellow-400 text-sm">⭐️ 8.5</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New and Upcoming Movies Section */}
      <div className="flex flex-wrap justify-center mt-8">
      <div className="w-full mb-4">
          <h2 className="text-2xl text-white mb-4">Upcoming</h2>
        </div>
        {images.slice(3, 7).map((image) => (
          <div key={image.id} className="w-1/4 p-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute top-2 left-2 bg-red-500 text-xs text-white py-1 px-2 rounded">New</div>
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto"
                onClick={() => handleImageClick(image.id, image.title)}
              />
              <div className="p-4">
                <h3 className="text-xl text-white">{image.title}</h3>
                <div className="text-sm text-white">Coming Soon</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Genres Section */}
      <div className="flex justify-center mt-8" style={{ overflowX: 'auto'}}>
        <div className="flex">
          <div className="w-full mb-4">
            <h2 className="text-2xl text-white mb-4">Genre</h2>
          </div>
          {genres.map((genre) => {
            // Filter images by genre
            const genreImages = images.filter((image) =>
              image.genre_ids.includes(genre.id)
            );

            // Check if there are images for this genre
            if (genreImages.length === 0) {
              return null; // Skip rendering if no images
            }

            return (
              <div key={genre.id} className="p-2">
                {/* Genre Card */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-xl text-white mb-2">{genre.name}</h3>
                  <div className="flex overflow-x-auto">
                    {genreImages
                      .slice(0, 2) // Display only 2 movies per genre
                      .map((image) => (
                        <div key={image.id} className="w-64 p-2">
                          <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                            <img
                              src={image.url}
                              alt={image.title}
                              className="w-full h-auto"
                              onClick={() => handleImageClick(image.id, image.title)}
                            />
                            <div className="p-4">
                              <h3 className="text-xl text-white">{image.title}</h3>
                              <div className="text-sm text-white">Coming Soon</div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
          {/* Populer */}
      <div className="flex flex-wrap justify-center mt-8">
        <div className="w-full mb-4">
          <h2 className="text-2xl text-white mb-4">Populer</h2>
        </div>
        {images.slice(0, 3).map((image) => (
          <div key={image.id} className="w-1/4 p-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden relative">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto transform hover:scale-105 transition duration-300"
                onClick={() => handleImageClick(image.id, image.title)}
              />
              <div className="p-4">
                <h3 className="text-xl text-white">{image.title}</h3>
                <div className="text-yellow-400 text-sm">⭐️ 8.5</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
          Load More <span className="ml-2">➕</span>
        </button>
      </div>
    </div>
  );
};

const REACT_APP_BASEURL = 'https://api.themoviedb.org/3';
const REACT_APP_BASEIMGURL = 'https://image.tmdb.org/t/p/w500';
const REACT_APP_APIKEY = 'b744a5d2b1c541ee4e9a3947c7f02775';

export default BrowseAllPage;
