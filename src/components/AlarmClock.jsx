import { useLanguage } from "../context/LanguageContext";

export default function AlarmClock() {
  const { t } = useLanguage();
  const imageUrl =
    "https://www.desjardins.com/content/experience-fragments/dcom/en/particuliers/accueil/bloc-promo/qc-on-oc/master/_jcr_content/root/container_385361207_/image_473855309_copy.coreimg.85.1600.jpeg/1788878811862/vitrine-promo-reer-celi.jpeg";

  return (
    <section className="bg-[#F2F4F5] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/60">
          <div className="bg-[#EFE6D8] w-full flex justify-center items-center py-6 px-4 md:py-10">
            <img
              src={imageUrl}
              alt={t.alarmClock.title}
              className="w-full max-w-2xl h-auto object-contain max-h-[380px]"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80";
              }}
            />
          </div>

          <div className="p-6 md:p-8 space-y-3 bg-white">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {t.alarmClock.title}
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              {t.alarmClock.text}
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline group"
              >
                <span className="w-6 h-6 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00703c] transition-colors">
                  →
                </span>
                <span className="underline">{t.alarmClock.link}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
