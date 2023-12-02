import "./App.css";
import MainLayout from "./layouts/MainLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import GenreIndex from "./pages/genre/GenreIndex";
import MovieDetailIndex from "./pages/movies/MovieDetailIndex";
import DetailSearch from "./pages/search/DetailSearch";
import ArticlesIndex from "./pages/articles/ArticlesIndex";
import ArticleDetailIndex from "./pages/article-detail/ArticleDetailIndex";
import BrowseAllPage from "./pages/bap/BrowseAllPageIndex";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/browse" element={<BrowseAllPage/>} />
      <Route path="/browse/genre" element={<GenreIndex />} />
      <Route path="/search" element={<DetailSearch />} />
      <Route path="/movie/:id" element={<MovieDetailIndex />} />
      <Route path="/articles" element={<ArticlesIndex />} />
      <Route path="/articles/:id" element={<ArticleDetailIndex />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
