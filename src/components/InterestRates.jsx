import { useLanguage } from "../context/LanguageContext";
import interestRatesImg from "../assets/illustration-planifier-projets.png";

export default function InterestRates() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#DAE7E7] py-14 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="w-full max-w-sm flex justify-center">
            <img
              src={interestRatesImg}
              alt={t.interestRates.title}
              className="w-full h-auto object-contain max-h-72"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t.interestRates.title}
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
            {t.interestRates.text}
          </p>

          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline group"
            >
              <span className="w-6 h-6 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00703c] transition-colors">
                →
              </span>
              <span className="underline">{t.interestRates.link}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
