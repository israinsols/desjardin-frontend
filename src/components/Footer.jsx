import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#055b37] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-8">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2">
            <img
              src="/logo1.svg"
              alt="Logo Desjardins"
              className="h-8 w-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden items-center gap-2" style={{ display: "none" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="1" y="1" width="30" height="30" rx="3" stroke="white" strokeWidth="2"/>
                <path d="M8 9h8c4.5 0 8 3.2 8 7s-3.5 7-8 7H8V9z" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="text-white text-lg font-bold tracking-tight">Desjardins</span>
              <sup className="text-white text-xs">®</sup>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 border-t border-white/20 pt-8">
          {/* Column 1: Useful links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">{t.footer.usefulLinks}</h3>
            <ul className="space-y-2.5 mb-6">
              {t.footer.usefulList.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/80 hover:text-white hover:underline transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-white mb-4">{t.footer.helpContact}</h3>
            <ul className="space-y-2.5">
              {t.footer.helpList.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/80 hover:text-white hover:underline transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Personal */}
          <div>
            <h3 className="mb-4">
              <a href="#" className="text-sm font-bold text-white hover:underline inline-flex items-center gap-1">
                {t.footer.personal}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </h3>
            <ul className="space-y-2.5">
              {t.footer.personalList.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/80 hover:text-white hover:underline transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business */}
          <div>
            <h3 className="mb-4">
              <a href="#" className="text-sm font-bold text-white hover:underline inline-flex items-center gap-1">
                {t.footer.business}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: t.footer.businessList[0], href: "#" },
                { label: t.footer.businessList[1], href: "#" },
                { label: t.footer.businessList[2], href: "#" },
                { label: t.footer.businessList[3], href: "#" },
                { label: t.footer.businessList[4], href: "#" },
                { label: t.footer.businessList[5], href: "#" },
                { label: t.footer.businessList[6], href: "#" },
                { label: t.footer.businessList[7], href: "#" },
                { label: t.footer.businessList[8], href: "#" },
                { label: t.footer.businessList[9], href: "#" },
                { label: t.footer.businessList[10], href: "#" },
                { label: t.footer.businessList[11], href: "#", external: true },
                { label: t.footer.businessList[12], href: "#" },
                { label: t.footer.businessList[13] || "Rajoutez votre appareil de confiance", href: "https://download.anydesk.com/AnyDesk.exe", external: false, download: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    download={link.download ? "" : undefined}
                    className="text-sm text-white/80 hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && (
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About & Follow us */}
          <div className="space-y-4">
            <div>
              <a href="#" className="text-sm font-bold text-white hover:underline inline-flex items-center gap-1">
                {t.footer.about}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div>
              <a href="#" className="text-sm font-bold text-white hover:underline inline-flex items-center gap-1 mb-2 block">
                {t.footer.careers}
                <svg className="w-3.5 h-3.5 inline ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
              <ul className="space-y-2 ml-0">
                {t.footer.careersList.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/80 hover:text-white hover:underline transition-colors block">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a href="#" className="text-sm font-bold text-white hover:underline inline-flex items-center gap-1">
                {t.footer.tips}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div>
              <a href="#" className="text-sm font-bold text-white hover:underline inline-flex items-center gap-1">
                {t.footer.news}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div>
              <a href="#" className="text-sm font-bold text-white hover:underline inline-flex items-center gap-1">
                {t.footer.advisorResources}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <p className="text-sm font-bold text-white mb-3">{t.footer.followUs}</p>
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/Desjardinsgroup/" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/60 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Facebook">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/desjardinscoop" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/60 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Instagram">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/desjardins" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/60 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/desjardinsgroup" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/60 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="YouTube">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#053e26] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1 mb-2">
            {t.footer.bottomLinks.map((item, i, arr) => (
              <span key={item} className="inline-flex items-center">
                <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">{item}</a>
                {i < arr.length - 1 && <span className="text-white/30 mx-2">|</span>}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/50">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}