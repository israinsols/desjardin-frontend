export default function OnlineServices() {
  return (
    <section className="bg-[#009A44] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="https://www.desjardins.com/content/dam/images/photos/accueil/services-en-ligne-qc-oc.jpg"
            alt="Online services"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80";
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Your finances, anywhere,<br />anytime
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Access AccèsD — our online banking platform — 24/7 from your computer, 
            tablet or phone. Easy, secure and always available.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://apps.apple.com/ca/app/desjardins-mobile-services/id386636953" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.desjardins.com/content/dam/images/logos/commun/logo-app-store-en.svg"
                alt="Download on the App Store"
                className="h-12"
                onError={(e) => {
                  e.target.parentElement.innerHTML = `<div class="bg-black text-white rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2"><span>🍎 App Store</span></div>`;
                }}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.desjardins.mobile" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.desjardins.com/content/dam/images/logos/commun/logo-app-google-en.svg"
                alt="Get it on Google Play"
                className="h-12"
                onError={(e) => {
                  e.target.parentElement.innerHTML = `<div class="bg-black text-white rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2"><span>▶ Google Play</span></div>`;
                }}
              />
            </a>
          </div>
          <a
            href="https://accweb.mouv.desjardins.com/identifiantunique/securite-garantie/authentification?domaineVirtuel=desjardins&langueCible=en"
            className="btn-white"
          >
            Sign in to AccèsD
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
