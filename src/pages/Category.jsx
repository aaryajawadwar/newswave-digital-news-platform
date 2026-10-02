import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Newspaper } from "lucide-react";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

function Category() {
  const { categoryName } = useParams();

  const decodedCategory = decodeURIComponent(categoryName || "");

  const categoryArticles = articles.filter(
    (article) =>
      article.category.toLowerCase() ===
      decodedCategory.toLowerCase()
  );

  const displayCategory =
    decodedCategory.charAt(0).toUpperCase() +
    decodedCategory.slice(1);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Newspaper size={28} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                News Category
              </p>

              <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {displayCategory}
              </h1>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
            Explore the latest stories, insights, and updates from the{" "}
            {displayCategory} section of NewsWave.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {categoryArticles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center dark:border-gray-700 dark:bg-gray-900">
            <Newspaper
              size={44}
              className="mx-auto text-gray-400"
            />

            <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
              No Articles Found
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              There are currently no articles in this category.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Explore All News
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                {categoryArticles.length}{" "}
                {categoryArticles.length === 1
                  ? "Article"
                  : "Articles"}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                Latest {displayCategory} Stories
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Category;