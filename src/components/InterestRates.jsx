export default function InterestRates() {
  const imageUrl =
    "https://www.desjardins.com/content/experience-fragments/dcom/en/particuliers/accueil/taux-calculateurs/qc/_jcr_content/root/container_1335917110/container_2003722674/container/image.coreimg.85.600.png/1765486836664/illustration-planifier-projets.png";

  return (
    <section className="bg-[#DAE7E7] py-14 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Left Column: Illustration */}
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="w-full max-w-sm flex justify-center">
            <img
              src={imageUrl}
              alt="Check out our reference rates"
              className="w-full h-auto object-contain max-h-72"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80";
              }}
            />
          </div>
        </div>

        {/* Right Column: Text & Link */}
        <div className="w-full md:w-7/12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Check out our reference rates
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
            Learn more about exchange rates and the rates of our savings, investment and financing products.
          </p>

          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00783A] hover:underline group"
            >
              <span className="w-6 h-6 rounded-full bg-[#009A44] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00783A] transition-colors">
                →
              </span>
              <span className="underline">See current rates</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
