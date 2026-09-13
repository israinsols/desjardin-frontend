export default function Together() {
  const imageUrl =
    "https://www.desjardins.com/content/experience-fragments/dcom/en/particuliers/accueil/rappel/qc-oc/_jcr_content/root/container_copy/image.coreimg.85.800.png/1780509981644/desjardins-cooperative.png";

  return (
    <section className="bg-[#D2EBD9] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Together is better at Desjardins
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                We&#39;re the largest financial cooperative group in Canada, working together for a better future.
                <sup className="text-xs ml-1 text-gray-600">[ 3 ]</sup>
              </p>
            </div>

            {/* Subsection 1 */}
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-gray-900">
                Committed to supporting youth
              </h3>
              <p className="text-sm text-gray-700">
                More than $50 million each year to help young people do the things they dream.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00783A] hover:underline pt-1"
              >
                <span className="w-5 h-5 rounded-full bg-[#009A44] text-white flex items-center justify-center text-xs font-bold">
                  →
                </span>
                <span className="underline">Learn more about the Together For Our Youth program</span>
              </a>
            </div>

            {/* Subsection 2 */}
            <div className="space-y-1.5 pt-2">
              <h3 className="text-base font-bold text-gray-900">
                Fostering sustainable development
              </h3>
              <p className="text-sm text-gray-700">
                With close to 50 responsible investment (RI) options.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00783A] hover:underline pt-1"
              >
                <span className="w-5 h-5 rounded-full bg-[#009A44] text-white flex items-center justify-center text-xs font-bold">
                  →
                </span>
                <span className="underline">Learn more about our RI approach</span>
              </a>
            </div>
          </div>

          {/* Right Column Image with Green Hexagon/Chevron Accent */}
          <div className="flex justify-center md:justify-end">
            <div className="relative max-w-md w-full">
              {/* Green Accent Ribbon Graphic (Top Right) */}
              <div className="absolute -top-4 right-12 w-28 h-10 bg-[#009A44] transform -rotate-12 rounded-sm z-10 shadow-sm"></div>
              
              {/* Image Container with rounded corners */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border-2 border-white/40">
                <img
                  src={imageUrl}
                  alt="Together is better at Desjardins"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80";
                  }}
                />
              </div>

              {/* Green Accent Ribbon Graphic (Bottom Right) */}
              <div className="absolute -bottom-3 right-4 w-28 h-10 bg-[#009A44] transform -rotate-12 rounded-sm z-10 shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Bottom Membership White Card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Membership is more than just opening an account
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
            Every Desjardins caisse is a financial services cooperative. As a member, you can take part in caisse decisions, qualify for a{" "}
            <a href="#" className="text-[#009A44] underline font-semibold">
              dividend
            </a>{" "}
            and help give back to the community.
            <sup className="text-xs ml-1 text-gray-600">[ 4 ]</sup>
          </p>
          <p className="text-xs font-semibold text-gray-600 pt-1">
            Ready to make the change?
          </p>
          <div className="pt-1">
            <a
              href="#"
              className="inline-block bg-[#009A44] hover:bg-[#00783A] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Open an account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
