import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchInputRef = useRef(null);
  const resultsRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showSearchToast, setShowSearchToast] = useState(false);

  const categories = [
    "All",
    "Technology",
    "Business",
    "Education",
    "Lifestyle",
    "Finance",
  ];

  /*
   * Focus search when user clicks
   * "Search Articles" from the mobile menu.
   *
   * After focusing, immediately remove the
   * navigation state so refreshing the page
   * does NOT focus/scroll to the search bar.
   */
  useEffect(() => {
    if (location.state?.focusSearch) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);

      navigate("/", {
        replace: true,
        state: {},
      });
    }
  }, [location.state, navigate]);

  /*
   * Filter articles
   */
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" ||
        article.category === selectedCategory;

      const searchText = submittedSearch
        .toLowerCase()
        .trim();

      const searchableText = [
        article.title,
        article.description,
        article.category,
        article.author,
        ...(article.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchText === "" ||
        searchableText.includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [submittedSearch, selectedCategory]);

  /*
   * Featured article
   */
  const featuredArticle = articles.find(
    (article) => article.featured
  );

  /*
   * Trending articles
   */
  const trendingArticles = articles.filter(
    (article) =>
      article.trending &&
      article.id !== featuredArticle?.id
  );

  /*
   * Search completed toast
   */
  const handleSearchSubmitted = () => {
    /*
     * Search and category should work independently.
     * When searching, reset category to All.
     */
    setSelectedCategory("All");

    setShowSearchToast(true);

    setTimeout(() => {
      setShowSearchToast(false);
    }, 3000);
  };

  /*
   * Automatically scroll to results
   * after search/category selection.
   */
  useEffect(() => {
    if (
      submittedSearch ||
      selectedCategory !== "All"
    ) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  }, [submittedSearch, selectedCategory]);

  return (
    <main>

      {/* ================= SEARCH TOAST ================= */}

      {showSearchToast && (
        <div className="fixed right-4 top-24 z-[100] animate-[toastIn_0.4s_ease-out]">

          <div className="flex items-start gap-3 rounded-2xl border border-green-200 bg-white px-5 py-4 shadow-2xl dark:border-green-900 dark:bg-gray-900">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400">
              ✓
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Search completed
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1
                  ? "article"
                  : "articles"}{" "}
                found
                {submittedSearch
                  ? ` for "${submittedSearch}"`
                  : ""}
              </p>
            </div>

          </div>

        </div>
      )}

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gray-950 text-white">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Hero Content */}
            <div className="animate-[fadeInUp_0.7s_ease-out]">

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-blue-500" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Today's Featured Story
                </p>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {featuredArticle.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                {featuredArticle.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-gray-400">

                <span className="rounded-full border border-gray-700 px-3 py-1.5 transition-colors duration-300 hover:border-blue-500 hover:text-blue-400">
                  {featuredArticle.category}
                </span>

                <span>•</span>

                <span>
                  {featuredArticle.readTime}
                </span>

                <span>•</span>

                <span>
                  {featuredArticle.date}
                </span>

              </div>

              {/* Explore Story */}
              <a
                href={`#article-${featuredArticle.id}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Explore Story

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

            {/* Featured Image */}
            <div className="group relative animate-[fadeInUp_0.9s_ease-out]">

              <div className="absolute -inset-3 rounded-3xl bg-blue-600/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">

                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">

                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    Featured
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SEARCH & CATEGORIES ================= */}

      <section className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl">

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              submittedSearch={submittedSearch}
              setSubmittedSearch={setSubmittedSearch}
              onSearchSubmitted={handleSearchSubmitted}
              inputRef={searchInputRef}
            />

          </div>

          {/* Category Buttons */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery("");
                  setSubmittedSearch("");
                }}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SEARCH RESULTS ================= */}

      {(submittedSearch ||
        selectedCategory !== "All") && (

        <section
          ref={resultsRef}
          className="scroll-mt-24 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >

          <div className="mb-8">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Search Results
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1
                ? "article"
                : "articles"}{" "}
              found
            </h2>

          </div>

          {filteredArticles.length === 0 ? (

            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center dark:border-gray-700 dark:bg-gray-900">

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                No articles found
              </h3>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try another search term or category.
              </p>

            </div>

          ) : (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}

            </div>

          )}

        </section>

      )}

      {/* ================= TRENDING ================= */}

      {!submittedSearch &&
        selectedCategory === "All" && (

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="mb-8">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Trending
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              What people are reading
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {trendingArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}

          </div>

        </section>

      )}

      {/* ================= LATEST NEWS ================= */}

      {!submittedSearch &&
        selectedCategory === "All" && (

        <section className="bg-gray-50 dark:bg-gray-900">

          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

            <div className="mb-8">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Latest News
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                Explore the latest stories
              </h2>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {articles.map((article) => (
                <div
                  id={`article-${article.id}`}
                  key={article.id}
                  className="animate-[fadeInUp_0.6s_ease-out]"
                >
                  <ArticleCard
                    article={article}
                  />
                </div>
              ))}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}

export default Home;