import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Type, Maximize2 } from "lucide-react";

function Preferences() {
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("newswave-font-size") || "medium";
  });

  const [readingWidth, setReadingWidth] = useState(() => {
    return localStorage.getItem("newswave-reading-width") || "comfortable";
  });

  useEffect(() => {
    localStorage.setItem("newswave-font-size", fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("newswave-reading-width", readingWidth);
  }, [readingWidth]);

  const fontSizes = [
    {
      id: "small",
      label: "Small",
      description: "Compact text",
      className: "text-sm",
    },
    {
      id: "medium",
      label: "Medium",
      description: "Comfortable reading",
      className: "text-base",
    },
    {
      id: "large",
      label: "Large",
      description: "Easier to read",
      className: "text-lg",
    },
  ];

  const widths = [
    {
      id: "comfortable",
      label: "Comfortable",
      description: "Balanced reading width",
    },
    {
      id: "wide",
      label: "Wide",
      description: "More content across the screen",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <ArrowLeft size={18} />
          Back to News
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Personalization
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Reading Preferences
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Customize your reading experience to make NewsWave more
            comfortable for you.
          </p>
        </div>

        {/* Font Size */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Type size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Text Size
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Choose the text size that feels most comfortable.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {fontSizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setFontSize(size.id)}
                className={`relative rounded-xl border p-4 text-left transition-all duration-300 ${
                  fontSize === size.id
                    ? "border-blue-500 bg-blue-50 shadow-sm dark:border-blue-500 dark:bg-blue-900/20"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"
                }`}
              >
                {fontSize === size.id && (
                  <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={13} />
                  </span>
                )}

                <span
                  className={`block font-semibold text-gray-900 dark:text-white ${size.className}`}
                >
                  {size.label}
                </span>

                <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                  {size.description}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Reading Width */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Maximize2 size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Reading Width
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Control how wide article content appears.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {widths.map((width) => (
              <button
                key={width.id}
                onClick={() => setReadingWidth(width.id)}
                className={`relative rounded-xl border p-4 text-left transition-all duration-300 ${
                  readingWidth === width.id
                    ? "border-blue-500 bg-blue-50 shadow-sm dark:border-blue-500 dark:bg-blue-900/20"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"
                }`}
              >
                {readingWidth === width.id && (
                  <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={13} />
                  </span>
                )}

                <span className="block font-semibold text-gray-900 dark:text-white">
                  {width.label}
                </span>

                <span className="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                  {width.description}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Preview */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Preview
          </p>

          <div
            className={`mx-auto mt-5 ${
              readingWidth === "wide" ? "max-w-4xl" : "max-w-2xl"
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your personalized reading experience
            </h2>

            <p
              className={`mt-4 leading-8 text-gray-600 dark:text-gray-300 ${
                fontSize === "small"
                  ? "text-sm"
                  : fontSize === "large"
                    ? "text-lg"
                    : "text-base"
              }`}
            >
              NewsWave lets you customize the way you read articles.
              Changes are automatically saved in your browser, so your
              preferences remain available when you return.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Preferences;