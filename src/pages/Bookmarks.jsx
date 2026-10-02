import { Link } from "react-router-dom";
import { Bookmark, Trash2 } from "lucide-react";
import { articles } from "../data/articles";

function Bookmarks() {
  const savedIds = JSON.parse(
    localStorage.getItem("newswave-bookmarks") || "[]"
  );

  const savedArticles = articles.filter((article) =>
    savedIds.includes(article.id)
  );

  const removeBookmark = (id) => {
    const updatedIds = savedIds.filter((savedId) => savedId !== id);

    localStorage.setItem(
      "newswave-bookmarks",
      JSON.stringify(updatedIds)
    );

    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <Bookmark className="text-blue-600" size={28} />

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Your Bookmarks
            </h1>
          </div>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Articles you saved for later reading.
          </p>
        </div>

        {savedArticles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center dark:border-gray-700 dark:bg-gray-900">
            <Bookmark
              size={40}
              className="mx-auto text-gray-400"
            />

            <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              No bookmarks yet
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Save articles and they will appear here.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Explore Articles
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedArticles.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <Link to={`/article/${article.id}`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="aspect-video w-full object-cover"
                  />
                </Link>

                <div className="p-5">
                  <p className="text-sm font-semibold text-blue-600">
                    {article.category}
                  </p>

                  <Link to={`/article/${article.id}`}>
                    <h2 className="mt-2 text-xl font-bold text-gray-900 hover:text-blue-600 dark:text-white">
                      {article.title}
                    </h2>
                  </Link>

                  <button
                    onClick={() => removeBookmark(article.id)}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-200 hover:text-red-600 dark:border-gray-700 dark:text-gray-300"
                  >
                    <Trash2 size={16} />
                    Remove Bookmark
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Bookmarks;