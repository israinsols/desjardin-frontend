import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logoAccesD from "../assets/accesd.svg";
import logoAccesDaffair from "../assets/accesdaffair.svg";
import logoInsurance from "../assets/logo-assurance-e.svg";
import logoBrokerage from "../assets/courtage-en-ligne-en.svg";
import logoSecurities from "../assets/gestion-patrimoine-en.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();

  const [activeTab, setActiveTab] = useState("Particuliers");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(lang);
  const [selectedProvince, setSelectedProvince] = useState("Quebec");
  const [selectedOtherSite, setSelectedOtherSite] = useState("");

  const navRef = useRef(null);

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  const handleGoLogin = () => {
    setLoginOpen(false);
    navigate("/login");
  };

  const handleConfirmLang = () => {
    setLang(selectedLang);
    setLangOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const topLinks = [t.nav.about, t.nav.careers, t.nav.tips, t.nav.contact];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm" ref={navRef}>
      {/* Top Green Bar */}
      <div className="bg-[#00874e] text-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90">
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
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" stroke="white" strokeWidth="2.5" fill="none"/>
              </svg>
              <span className="text-white text-xl font-bold tracking-tight">Desjardins</span>
              <sup className="text-white text-[10px] -ml-1">®</sup>
            </div>
          </Link>

          {/* Top Right Navigation Links */}
          <nav className="hidden md:flex items-center h-full">
            {topLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="h-14 flex items-center px-4 text-xs font-bold hover:bg-white/10 border-l border-white/15 transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Language / Province Selector Button */}
            <div className="h-14 border-l border-white/15">
              <button
                onClick={() => {
                  setLangOpen(!langOpen);
                  if (loginOpen) setLoginOpen(false);
                }}
                className={`h-full flex items-center gap-1.5 px-5 text-xs font-bold transition-colors ${
                  langOpen ? "bg-white text-gray-900" : "text-white hover:bg-white/10"
                }`}
              >
                <span>{t.nav.langBtn}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${
                    langOpen ? "rotate-180 text-gray-900" : "text-white"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Search Button */}
            <button
              className="h-14 flex items-center px-4 hover:bg-white/10 border-l border-white/15 transition-colors"
              aria-label="Recherche"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Full-Width Language / Province Dropdown Panel */}
      {langOpen && (
        <div className="bg-[#F2F4F5] border-b border-gray-300 py-6 px-6 shadow-md transition-all">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 lg:gap-14">
              <div>
                <p className="font-bold text-sm text-gray-900 mb-3">{t.nav.chooseLang}</p>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
                    <input
                      type="radio"
                      name="lang-option"
                      value="fr"
                      checked={selectedLang === "fr"}
                      onChange={() => {
                        setSelectedLang("fr");
                        setLang("fr");
                      }}
                      className="accent-[#00874e] w-4 h-4"
                    />
                    <span className="font-semibold">Français</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
                    <input
                      type="radio"
                      name="lang-option"
                      value="en"
                      checked={selectedLang === "en"}
                      onChange={() => {
                        setSelectedLang("en");
                        setLang("en");
                      }}
                      className="accent-[#00874e] w-4 h-4"
                    />
                    <span>English</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm text-gray-900 mb-3">{t.nav.chooseProvince}</p>
                <div className="flex items-center gap-4">
                  <select
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="border border-gray-400 bg-white rounded-lg px-4 py-2 text-sm font-medium text-gray-800 min-w-[200px]"
                  >
                    <option value="Quebec">Québec</option>
                    <option value="Ontario">Ontario</option>
                    <option value="British Columbia">Colombie-Britannique</option>
                    <option value="Alberta">Alberta</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                  </select>

                  <button
                    onClick={handleConfirmLang}
                    className="bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-bold px-6 py-2 rounded-lg transition-colors"
                  >
                    {t.nav.confirm}
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setLangOpen(false)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main White Nav Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14 relative">
          <nav className="flex items-center gap-6 h-full">
            {/* Personal / Particuliers Tab */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setActiveTab("Particuliers");
                  setOpenDropdown(openDropdown === "Particuliers" ? null : "Particuliers");
                }}
                className={`h-14 font-bold text-base px-2 border-b-2 transition-all flex items-center gap-1 ${
                  activeTab === "Particuliers" || openDropdown === "Particuliers"
                    ? "border-[#00874e] text-gray-900"
                    : "border-transparent text-gray-700 hover:text-[#00874e]"
                }`}
              >
                {t.nav.personal}
              </button>

              {openDropdown === "Particuliers" && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-2xl rounded-b-lg py-3 px-2 w-64 z-50 space-y-1">
                  {t.nav.personalItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm font-bold text-gray-800 hover:bg-[#F2F8F4] hover:text-[#00874e] rounded transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Business / Entreprises Tab */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setActiveTab("Entreprises");
                  setOpenDropdown(openDropdown === "Entreprises" ? null : "Entreprises");
                }}
                className={`h-14 font-bold text-base px-2 border-b-2 transition-all flex items-center gap-1 ${
                  activeTab === "Entreprises" || openDropdown === "Entreprises"
                    ? "border-[#00874e] text-gray-900"
                    : "border-transparent text-gray-700 hover:text-[#00874e]"
                }`}
              >
                {t.nav.business}
              </button>

              {openDropdown === "Entreprises" && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-2xl rounded-b-lg py-3 px-2 w-72 z-50 space-y-1 max-h-[85vh] overflow-y-auto">
                  {t.nav.businessItems.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center justify-between px-4 py-2 text-sm font-bold text-gray-800 hover:bg-[#F2F8F4] hover:text-[#00874e] rounded transition-colors"
                    >
                      <span>{item.name}</span>
                      {item.external && (
                        <svg className="w-3.5 h-3.5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      )}
                      {item.chevron && (
                        <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-bold text-gray-800 hover:text-[#00874e] transition-colors"
            >
              <svg className="w-5 h-5 text-[#00874e]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>{t.nav.getHelp}</span>
            </a>

            <div className="relative">
              <button
                onClick={() => {
                  setLoginOpen(!loginOpen);
                  if (langOpen) setLangOpen(false);
                  setOpenDropdown(null);
                }}
                className="bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 018 0v4" />
                </svg>
                <span>{t.nav.login}</span>
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {loginOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white text-gray-900 border border-gray-200 rounded-xl shadow-2xl p-6 w-[360px] z-50 space-y-6 max-h-[85vh] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-xl text-gray-900">{t.nav.loginModalTitle}</h3>
                    <button
                      onClick={() => setLoginOpen(false)}
                      className="text-gray-500 hover:text-gray-800 text-lg font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">{t.nav.onlineServices}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoAccesD}
                          alt="AccèsD"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                       
                        <img
                          src={logoAccesDaffair}
                          alt="AccèsD"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                       
                        {/* <span className="font-bold italic text-base text-gray-800">AccèsD</span> */}
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        {t.nav.access}
                      </button>
                    </div>
                    <div className="space-y-1 pt-1 text-xs font-semibold">
                      <div>
                        <Link to="/login" onClick={() => setLoginOpen(false)} className="text-[#0066CC] hover:underline">
                          {t.nav.moreAccesD}
                        </Link>
                      </div>
                      <div>
                        <Link to="/login" onClick={() => setLoginOpen(false)} className="text-[#0066CC] hover:underline">
                          {t.nav.moreAccesDAffaires}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">{t.nav.autoHomeInsurance}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoInsurance}
                          alt="Desjardins Assurances"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        {/* <span className="font-bold text-xs text-gray-800">{t.nav.desjardinsInsurance}</span> */}
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        {t.nav.access}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">{t.nav.onlineBrokerage}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoBrokerage}
                          alt="Desjardins Disnat"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        {/* <span className="font-bold text-xs text-gray-800">{t.nav.desjardinsDisnat}</span> */}
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        {t.nav.access}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">{t.nav.securities}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoSecurities}
                          alt="Valeurs mobilières Desjardins"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        {/* <span className="font-bold text-xs text-gray-800">{t.nav.wealthManagement}</span> */}
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        {t.nav.access}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-sm text-gray-900">{t.nav.visitOtherSite}</h4>
                    <select
                      value={selectedOtherSite}
                      onChange={(e) => setSelectedOtherSite(e.target.value)}
                      className="w-full border border-gray-400 bg-white rounded-lg px-3 py-2 text-sm font-medium text-gray-800"
                    >
                      <option value="" disabled>{t.nav.select}</option>
                      <optgroup label={t.nav.personal} className="font-semibold"> 
                        <option value="private-mgt">Gestion privée Desjardins</option>
                        <option value="signature">Service Signature</option>
                        <option value="ind-ins">Assurance individuelle</option>
                        <option value="grs-members">Épargne-retraite collective - Participants</option>
                        <option value="gi-members">Assurance collective - Adhérents</option>
                        <option value="gi-members">Épargne individuelle - Fonds de placement garanti Desjardins Bank en ligne - États-Unis</option>
                      </optgroup>
                      <optgroup label={t.nav.business} className="font-semibold">
                        <option value="gi-admin">Assurance collective - Administrateurs</option>
                        <option value="employer-d">Employeur D paie </option>
                        <option value="trust">Épargne-retraite collective - Promoteurs</option>
                        <option value="trust">Fiducie - Garde de valeurs</option>
                        <option value="trust">LC Express D</option>
                        <option value="trust">Votre portefeuille en Fonds Desjardins</option>
                        <option value="trust">Desjardins Bank en ligne - États-Unis (en anglais seulement)</option>
                        <option value="trust">Affacturage Desjardins</option>
                      </optgroup>
                    </select>
                    <div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        {t.nav.access}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/login"
                      onClick={() => setLoginOpen(false)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#0066CC] hover:underline"
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V7a4 4 0 018 0v4" />
                      </svg>
                      <span className="underline">{t.nav.securityGuarantee}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#00874e]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-xl">
          <div className="p-4 border-b border-gray-100 flex gap-4">
            <button
              onClick={() => setActiveTab("Particuliers")}
              className={`flex-1 py-2 font-bold text-sm rounded ${
                activeTab === "Particuliers" ? "bg-[#00874e] text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {t.nav.personal}
            </button>
            <button
              onClick={() => setActiveTab("Entreprises")}
              className={`flex-1 py-2 font-bold text-sm rounded ${
                activeTab === "Entreprises" ? "bg-[#00874e] text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {t.nav.business}
            </button>
          </div>
          <div className="p-4 space-y-3">
            {[t.nav.about, t.nav.careers, t.nav.tips, t.nav.contact, t.nav.getHelp].map((link) => (
              <a key={link} href="#" className="block text-sm font-semibold text-gray-800 hover:text-[#00874e]">
                {link}
              </a>
            ))}
            <button
              onClick={handleGoLogin}
              className="w-full bg-[#00874e] text-white font-bold text-sm py-2.5 rounded-lg"
            >
              {t.nav.login}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
