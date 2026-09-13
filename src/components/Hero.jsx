import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const imageUrl =
    "https://www.desjardins.com/content/dam/target/0057/vitrine-nouveaux-arrivants.jpg";

  return (
    <section className="bg-white w-full">
      {/* Top Tagline Header */}
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {t.hero.tagline}
        </h1>
      </div>

      {/* Full Width Split Hero Banner */}
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row items-stretch min-h-[440px] md:min-h-[500px]">
          {/* Left Column - Mint Green Box */}
          <div className="w-full md:w-1/2 bg-[#CCE7D7] p-8 md:p-16 lg:p-24 flex flex-col justify-center items-start">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.hero.title}
            </h2>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-8 max-w-md">
              {t.hero.text}
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-[#00874e] hover:bg-[#00703c] text-white font-semibold text-sm px-6 py-3 rounded-lg underline transition-colors"
              >
                {t.hero.button}
              </a>
            </div>
          </div>

          {/* Right Column - Full Height Image */}
          <div className="w-full md:w-1/2 relative min-h-[380px] md:min-h-[500px]">
            <img
              src={imageUrl}
              alt={t.hero.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
