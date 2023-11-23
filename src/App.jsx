import "./App.css";
import MainLayout from "./layouts/MainLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

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
      <Route index element={<h1>Home</h1>} />

      {/* Routingan kalian */}
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
