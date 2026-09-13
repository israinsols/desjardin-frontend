import { useLanguage } from "../context/LanguageContext";

export default function OnlineAccess() {
  const { t } = useLanguage();
  const imageUrl =
    "https://www.desjardins.com/content/experience-fragments/dcom/en/particuliers/accueil/services-en-ligne/master/_jcr_content/root/container_1685205247/container/image.coreimg.85.600.jpeg/1752775116031/services-en-ligne-qc-oc.jpeg";

  return (
    <section className="bg-[#E9EEEE] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14">
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-sm border border-black/5 w-full max-w-md">
            <img
              src={imageUrl}
              alt={t.onlineAccess.title}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80";
              }}
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t.onlineAccess.title}
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            {t.onlineAccess.text1}
            <sup className="text-xs ml-1 text-gray-600">[ 2 ]</sup>
          </p>

          <p className="text-sm font-semibold text-gray-800 pt-1">
            {t.onlineAccess.subTitle}
          </p>

          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 pl-1">
            {t.onlineAccess.items.map((item) => (
              <li key={item} className="leading-snug">
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-700 leading-relaxed pt-1">
            {t.onlineAccess.text2}
          </p>

          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline group"
            >
              <span className="w-6 h-6 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00703c] transition-colors">
                →
              </span>
              <span className="underline">{t.onlineAccess.link}</span>
            </a>
          </div>

          <div className="pt-4 space-y-3">
            <h3 className="text-base font-bold text-gray-900">
              {t.onlineAccess.appTitle}
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://apps.apple.com/ca/app/desjardins-mobile-services/id386636953"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div class="bg-black text-white text-xs rounded-lg px-4 py-2.5 font-semibold flex items-center gap-2"><span>🍎 App Store</span></div>`;
                  }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.desjardins.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div class="bg-black text-white text-xs rounded-lg px-4 py-2.5 font-semibold flex items-center gap-2"><span>▶ Google Play</span></div>`;
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
