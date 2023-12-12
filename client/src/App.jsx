import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./ScrollToTop";
import Beranda from "./page/Beranda";
import Konsultasi from "./page/Konsultasi";
import Kelas from "./page/Kelas";
import Profil from "./page/Profil";
import Tentang from "./page/Tentang";
import Login from "./page/Login";
import Register from "./page/Register"
import Kosong from "./page/TidakTahu";
import Deskripsi from "./page/Deskripsi";
import Deskripsi1 from "./page/Deskripsi1";
import Up from "./page/Up";
import "./media/style.css";
import "./media/style2.css";


const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Beranda />,
      },
      {
        path: "/deskripsi",
        element: <Deskripsi />,
      },
      {
        path: "/up",
        element: <Up />,
      },
      {
        path: "/deskripsi1",
        element: <Deskripsi1 />,
      },
      {
        path: "/kelas",
        element: <Kelas />,
      },
      {
        path: "/konsultasi",
        element: <Konsultasi />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
      {
        path: "/*",
        element: <Kosong />,
      },
      {
        path: "/tentang",
        element: <Tentang />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div >
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
