import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";

function ArticleCard({ article }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
      <Link to={`/article/${article.id}`}>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">

          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Category */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-gray-900/90 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
              {article.category}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute right-4 top-4 flex h-9 w-9 translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-gray-900/90 dark:text-white">
            <ArrowUpRight size={18} />
          </div>

        </div>

        {/* Content */}
        <div className="p-5">

          <h3 className="line-clamp-2 text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {article.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {article.description}
          </p>

          {/* Meta */}
          <div className="mt-5 flex items-center justify-between">

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>

            <span className="text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-blue-400">
              Read →
            </span>

          </div>

        </div>

      </Link>
    </article>
  );
}

export default ArticleCard;