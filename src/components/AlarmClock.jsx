export default function AlarmClock() {
  const imageUrl =
    "https://www.desjardins.com/content/experience-fragments/dcom/en/particuliers/accueil/bloc-promo/qc-on-oc/master/_jcr_content/root/container_385361207_/image_473855309_copy.coreimg.85.1600.jpeg/1788878811862/vitrine-promo-reer-celi.jpeg";

  return (
    <section className="bg-[#F2F4F5] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Large Rounded Promo Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/60">
          {/* Top Beige Image Area */}
          <div className="bg-[#EFE6D8] w-full flex justify-center items-center py-6 px-4 md:py-10">
            <img
              src={imageUrl}
              alt="Save for what matters with a TFSA - Alarm clock promo"
              className="w-full max-w-2xl h-auto object-contain max-h-[380px]"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80";
              }}
            />
          </div>

          {/* Bottom Content Area */}
          <div className="p-6 md:p-8 space-y-3 bg-white">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Save for what matters with a TFSA
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Invest early and save more tax-free
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00783A] hover:underline group"
              >
                <span className="w-6 h-6 rounded-full bg-[#009A44] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00783A] transition-colors">
                  →
                </span>
                <span className="underline">Discover all the benefits of a TFSA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
