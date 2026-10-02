import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bookmark,
  Moon,
  Sun,
  Menu,
  X,
  Settings,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 animate-[navFadeIn_0.5s_ease-out] border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-gray-800/80 dark:bg-gray-950/90">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group text-2xl font-bold tracking-tight text-gray-900 transition-transform duration-300 hover:scale-[1.03] dark:text-white"
          >
            News
            <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-500">
              Wave
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">

            <Link
              to="/"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/category/Technology"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Technology
            </Link>

            <Link
              to="/category/Business"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Business
            </Link>

            <Link
              to="/category/Lifestyle"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Lifestyle
            </Link>

          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">

            {/* Search */}
            <Link
              to="/"
              state={{ focusSearch: true }}
              className="rounded-full p-2 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              aria-label="Search"
            >
              <Search size={20} />
            </Link>

            {/* Bookmarks */}
            <Link
              to="/bookmarks"
              className="rounded-full p-2 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              aria-label="Bookmarks"
            >
              <Bookmark size={20} />
            </Link>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-700 transition-all duration-300 hover:rotate-12 hover:scale-110 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 md:hidden">

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-gray-200 py-4 dark:border-gray-800">

            <div className="flex flex-col gap-1">

              {/* Home */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Home
              </Link>

              {/* Technology */}
              <Link
                to="/category/Technology"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Technology
              </Link>

              {/* Business */}
              <Link
                to="/category/Business"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Business
              </Link>

              {/* Lifestyle */}
              <Link
                to="/category/Lifestyle"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Lifestyle
              </Link>

              {/* Bookmarks */}
              <Link
                to="/bookmarks"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                <Bookmark size={18} />
                Bookmarks
              </Link>

              {/* Preferences */}
              <Link
                to="/preferences"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                <Settings size={18} />
                Reading Preferences
              </Link>

              {/* Search */}
              <Link
                to="/"
                state={{ focusSearch: true }}
                onClick={closeMobileMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                <Search size={18} />
                Search Articles
              </Link>

            </div>

          </nav>
        </div>

      </div>

    </header>
  );
}

export default Navbar;