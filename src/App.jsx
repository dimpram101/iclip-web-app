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
import ArticlesIndex from "./pages/articles/ArticlesIndex";
import ArticleDetailIndex from "./pages/article-detail/ArticleDetailIndex";

// ini routingannya, disesuaikan aja nama routenya sama fitur kalian,
// kalo mau bikin route baru, bikin <Route path="/nama-routenya" element={<NamaComponentnya />} />
// kalo mau bikin route pake params, bikin <Route path="/nama-routenya/:namaParams" element={<NamaComponentnya />} />
// oiya, nama routenya kalau bisa konsisten ya, kek :
// - /home
// - /articles
// - /articles/:id
// - /movies
// - /movies/:id
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* KHUSUS AMEL PAKE ROUTINGAN DI BAWAH INI, TINGGAL GANTI SAMA COMPONENTNYA YAAA */}
      <Route index element={<Home />} />

      {/* Routingan kalian */}
      <Route path="/browse" element={<GenreIndex />} />
      <Route path="/search" element={<DetailSearch/>} />
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
