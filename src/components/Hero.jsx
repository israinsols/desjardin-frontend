export default function Hero() {
  const imageUrl =
    "https://www.desjardins.com/content/dam/target/0057/vitrine-nouveaux-arrivants.jpg";

  return (
    <section className="bg-white w-full">
      {/* Top Tagline Header */}
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Committed. Connected.
        </h1>
      </div>

      {/* Full Width Split Hero Banner (No horizontal side margins) */}
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row items-stretch min-h-[440px] md:min-h-[500px]">
          {/* Left Column - Mint Green Box */}
          <div className="w-full md:w-1/2 bg-[#D2EBD9] p-8 md:p-16 lg:p-24 flex flex-col justify-center items-start">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Moving to Canada?
            </h2>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-8 max-w-md">
              We&#39;re here to help you get started with products and services that work for you.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-[#009A44] hover:bg-[#00783A] text-white font-semibold text-sm px-6 py-3 rounded-lg underline transition-colors"
              >
                See our offer for newcomers
              </a>
            </div>
          </div>

          {/* Right Column - Full Height Image with Green Chevron Accent */}
          <div className="w-full md:w-1/2 relative min-h-[380px] md:min-h-[500px]">
            <img
              src={imageUrl}
              alt="Moving to Canada with Desjardins"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80";
              }}
            />

            {/* Overlaid Green Chevron Graphic (Top Right) */}
            <div className="absolute top-6 right-16 z-10 pointer-events-none">
              <svg
                width="80"
                height="140"
                viewBox="0 0 70 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0 L70 40 L70 65 L35 42 L35 120 L10 120 Z"
                  fill="#009A44"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
