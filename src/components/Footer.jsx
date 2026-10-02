import { Link } from "react-router-dom";
import {
  Bookmark,
  Settings,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              News<span className="text-blue-500">Wave</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              Your modern digital news and magazine platform for
              discovering the latest stories, insights, and ideas
              from around the world.
            </p>

            <p className="mt-6 text-xs text-gray-500">
              Stay informed. Discover more. Read better.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                to="/bookmarks"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                <Bookmark size={15} />
                Bookmarks
              </Link>

              <Link
                to="/preferences"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                <Settings size={15} />
                Reading Preferences
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Categories
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/category/Technology"
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Technology
              </Link>

              <Link
                to="/category/Business"
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Business
              </Link>

              <Link
                to="/category/Education"
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Education
              </Link>

              <Link
                to="/category/Lifestyle"
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Lifestyle
              </Link>

              <Link
                to="/category/Finance"
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Finance
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © 2026 NewsWave. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;