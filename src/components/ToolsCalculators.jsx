import { useLanguage } from "../context/LanguageContext";

export default function ToolsCalculators() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-14 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {t.toolsCalculators.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.toolsCalculators.tools.map((tool) => (
            <a
              key={tool}
              href="#"
              className="group flex items-center justify-between p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-sm font-bold text-gray-800 pr-2">
                {tool}
              </span>
              <svg
                className="w-4 h-4 text-[#00874e] flex-shrink-0 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ))}
        </div>

        <div className="pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline group"
          >
            <span className="w-6 h-6 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00703c] transition-colors">
              →
            </span>
            <span className="underline">{t.toolsCalculators.link}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
