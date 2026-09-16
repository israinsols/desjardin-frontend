import onlineServicesImg from "../assets/services-en-ligne.jpg";
import appStoreBadge from "../assets/app-store-badge.svg";
import googlePlayBadge from "../assets/google-play-badge.svg";

export default function OnlineServices() {
  return (
    <section className="bg-[#009A44] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={onlineServicesImg}
            alt="Online services"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
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
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.desjardins.mobile" target="_blank" rel="noopener noreferrer">
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-12"
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
