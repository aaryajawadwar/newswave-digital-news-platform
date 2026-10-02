import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
import Bookmarks from "./pages/Bookmarks";
import Category from "./pages/Category";
import Preferences from "./pages/Preferences";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">

        <Navbar />

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Article Details */}
          <Route
            path="/article/:id"
            element={<ArticleDetails />}
          />

          {/* Bookmarks */}
          <Route
            path="/bookmarks"
            element={<Bookmarks />}
          />

          {/* Category */}
          <Route
            path="/category/:categoryName"
            element={<Category />}
          />

          {/* Reading Preferences */}
          <Route
            path="/preferences"
            element={<Preferences />}
          />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;