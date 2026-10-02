import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Bookmark, Clock } from "lucide-react";
import { useState } from "react";
import { articles } from "../data/articles";

function ArticleDetails() {
  const { id } = useParams();

  const articleId = Number(id);

  const article = articles.find(
    (item) => item?.id === articleId
  );

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const savedIds = JSON.parse(
      localStorage.getItem("newswave-bookmarks") || "[]"
    );

    return savedIds.includes(articleId);
  });

  const fontSize =
    localStorage.getItem("newswave-font-size") || "medium";

  const readingWidth =
    localStorage.getItem("newswave-reading-width") ||
    "comfortable";

  const toggleBookmark = () => {
    const savedIds = JSON.parse(
      localStorage.getItem("newswave-bookmarks") || "[]"
    );

    let updatedIds;

    if (savedIds.includes(articleId)) {
      updatedIds = savedIds.filter(
        (savedId) => savedId !== articleId
      );
    } else {
      updatedIds = [...savedIds, articleId];
    }

    localStorage.setItem(
      "newswave-bookmarks",
      JSON.stringify(updatedIds)
    );

    setIsBookmarked(updatedIds.includes(articleId));
  };

  if (!article) {
    return (
      <main className="min-h-screen bg-white px-4 py-20 text-center dark:bg-gray-950">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Article Not Found
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          We couldn't find the article you're looking for.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-blue-600"
        >
          Go Back Home
        </Link>
      </main>
    );
  }

  const articleWidth =
    readingWidth === "wide"
      ? "max-w-6xl"
      : "max-w-4xl";

  const articleTextSize =
    fontSize === "small"
      ? "text-base"
      : fontSize === "large"
        ? "text-xl"
        : "text-lg";

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <article
        className={`mx-auto px-4 py-12 sm:px-6 lg:px-8 ${articleWidth}`}
      >
        {/* Back Button */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <ArrowLeft size={18} />
          Back to News
        </Link>

        {/* Category */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          {article.category}
        </p>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl">
          {article.title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {article.description}
        </p>

        {/* Article Information */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>By {article.author}</span>

          <span>•</span>

          <span>{article.date}</span>

          <span>•</span>

          <span className="flex items-center gap-1">
            <Clock size={16} />
            {article.readTime}
          </span>
        </div>

        {/* Article Image */}
        <div className="mt-10 overflow-hidden rounded-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className={`mt-10 space-y-6 leading-8 text-gray-700 dark:text-gray-300 ${articleTextSize}`}
        >
          <p>
            Technology continues to change the way people interact
            with the world. From education and business to
            entertainment and communication, digital tools have
            become an important part of everyday life.
          </p>

          <p>
            Artificial intelligence is one of the technologies
            creating major changes. Modern AI systems can process
            information, understand patterns, generate content,
            and assist people with many different tasks.
          </p>

          <p>
            As these technologies continue to develop, understanding
            how they work and how they can be used responsibly will
            become increasingly important.
          </p>

          <p>
            The future will likely bring even more digital
            experiences that combine intelligent systems with human
            creativity and decision making.
          </p>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={toggleBookmark}
          className={`mt-10 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-white transition-all duration-300 ${
            isBookmarked
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-900 hover:bg-blue-600"
          }`}
        >
          <Bookmark
            size={18}
            fill={isBookmarked ? "currentColor" : "none"}
          />

          {isBookmarked
            ? "Bookmarked"
            : "Bookmark Article"}
        </button>
      </article>
    </main>
  );
}

export default ArticleDetails;