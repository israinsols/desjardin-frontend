import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import countOnUs1 from "../assets/count-on-us-1.jpg";
import countOnUs2 from "../assets/count-on-us-2.jpg";

export default function CountOnUs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useLanguage();

  const articleImages = [countOnUs1, countOnUs2];

  return (
    <section className="bg-[#F2F4F5] py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {t.countOnUs.title}
          </h2>
          <p className="text-sm text-gray-600">
            {t.countOnUs.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.countOnUs.articles.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <a
                key={item.title}
                href="#"
                onClick={() => setSelectedIndex(idx)}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-200 block flex flex-col justify-between ${
                  isSelected
                    ? "hover:ring-2 ring-[#0066CC] shadow-md"
                    : "shadow-md hover:ring-2 ring-[#0066CC] shadow-md"
                }`}
              >
                <div className="h-56 md:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={articleImages[idx]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#00874e] tracking-wide block mb-2">
                      {item.tag}
                    </span>
                    <h3
                      className={`text-base md:text-lg font-bold leading-snug ${
                        isSelected
                          ? "text-[#00874e] underline"
                          : "text-gray-900 hover:text-[#00874e] hover:underline"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex justify-end pt-4">
                    <svg
                      className="w-5 h-5 text-[#00874e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline group"
          >
            <span className="w-6 h-6 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00703c] transition-colors">
              →
            </span>
            <span className="underline">{t.countOnUs.link}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
