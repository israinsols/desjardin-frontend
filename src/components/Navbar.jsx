import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Personal");
  const [openDropdown, setOpenDropdown] = useState(null); // 'Personal' | 'Business' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedProvince, setSelectedProvince] = useState("Quebec");
  const [selectedOtherSite, setSelectedOtherSite] = useState("");

  const navRef = useRef(null);

  const logoAccesD =
    "https://www.desjardins.com/content/dam/images/logo/particuliers/accesd.svg";
  const logoInsurance =
    "https://www.desjardins.com/content/dam/images/logo/assurances/logo-assurance-e.svg";
  const logoBrokerage =
    "https://www.desjardins.com/content/dam/images/logo/particuliers/courtage-en-ligne-en.svg";
  const logoSecurities =
    "https://www.desjardins.com/content/dam/images/logo/particuliers/gestion-patrimoine-en.svg";

  const personalItems = [
    "Accounts and services",
    "Credit cards",
    "Mortgage",
    "Loans and credit",
    "Savings and investment",
    "Insurance",
    "Wealth management",
    "Offers",
  ];

  const businessItems = [
    { name: "Accounts and cash management" },
    { name: "Financing and loans" },
    { name: "Credit cards" },
    { name: "Projects" },
    { name: "Industries" },
    { name: "Business partners and solutions" },
    { name: "Employer solutions" },
    { name: "Insurance" },
    { name: "International services" },
    { name: "Investment" },
    { name: "Capital markets" },
    { name: "Trust services", external: true },
    { name: "Group retirement savings" },
    { name: "See more", chevron: true },
  ];

  const handleGoLogin = () => {
    setLoginOpen(false);
    navigate("/login");
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm" ref={navRef}>
      {/* Top Green Bar */}
      <div className="bg-[#008444] text-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90">
            <img
              src="/logo1.svg"
              alt="Desjardins Logo"
              className="h-8 w-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden items-center gap-2" style={{ display: "none" }}>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" stroke="white" strokeWidth="2.5" fill="none"/>
              </svg>
              <span className="text-white text-xl font-bold tracking-tight">Desjardins</span>
              <sup className="text-white text-[10px] -ml-1">®</sup>
            </div>
          </Link>

          {/* Top Right Navigation Links */}
          <nav className="hidden md:flex items-center h-full">
            {["About us", "Careers", "Advice", "Contact us"].map((item) => (
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
                <span>QC | English</span>
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
              aria-label="Search"
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
              {/* Choose your language */}
              <div>
                <p className="font-bold text-sm text-gray-900 mb-3">Choose your language</p>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
                    <input
                      type="radio"
                      name="lang-option"
                      value="fr"
                      checked={selectedLang === "fr"}
                      onChange={() => setSelectedLang("fr")}
                      className="accent-[#008444] w-4 h-4"
                    />
                    <span>Français</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
                    <input
                      type="radio"
                      name="lang-option"
                      value="en"
                      checked={selectedLang === "en"}
                      onChange={() => setSelectedLang("en")}
                      className="accent-[#008444] w-4 h-4"
                    />
                    <span className="font-semibold">English</span>
                  </label>
                </div>
              </div>

              {/* Choose your province or state */}
              <div>
                <p className="font-bold text-sm text-gray-900 mb-3">Choose your province or state</p>
                <div className="flex items-center gap-4">
                  <select
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="border border-gray-400 bg-white rounded-lg px-4 py-2 text-sm font-medium text-gray-800 min-w-[200px]"
                  >
                    <option value="Quebec">Quebec</option>
                    <option value="Ontario">Ontario</option>
                    <option value="British Columbia">British Columbia</option>
                    <option value="Alberta">Alberta</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                  </select>

                  <button
                    onClick={() => setLangOpen(false)}
                    className="bg-[#008444] hover:bg-[#007038] text-white text-sm font-bold px-6 py-2 rounded-lg transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>

            {/* Close Button Right */}
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
          {/* Left Tabs: Personal & Business with Click-Only Dropdowns */}
          <nav className="flex items-center gap-6 h-full">
            {/* Personal Tab */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setActiveTab("Personal");
                  setOpenDropdown(openDropdown === "Personal" ? null : "Personal");
                }}
                className={`h-14 font-bold text-base px-2 border-b-2 transition-all flex items-center gap-1 ${
                  activeTab === "Personal" || openDropdown === "Personal"
                    ? "border-[#008444] text-gray-900"
                    : "border-transparent text-gray-700 hover:text-[#008444]"
                }`}
              >
                Personal
              </button>

              {/* Personal Dropdown Menu */}
              {openDropdown === "Personal" && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-2xl rounded-b-lg py-3 px-2 w-64 z-50 space-y-1">
                  {personalItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm font-bold text-gray-800 hover:bg-[#F2F8F4] hover:text-[#008444] rounded transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Business Tab */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setActiveTab("Business");
                  setOpenDropdown(openDropdown === "Business" ? null : "Business");
                }}
                className={`h-14 font-bold text-base px-2 border-b-2 transition-all flex items-center gap-1 ${
                  activeTab === "Business" || openDropdown === "Business"
                    ? "border-[#008444] text-gray-900"
                    : "border-transparent text-gray-700 hover:text-[#008444]"
                }`}
              >
                Business
              </button>

              {/* Business Dropdown Menu */}
              {openDropdown === "Business" && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-2xl rounded-b-lg py-3 px-2 w-72 z-50 space-y-1 max-h-[85vh] overflow-y-auto">
                  {businessItems.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center justify-between px-4 py-2 text-sm font-bold text-gray-800 hover:bg-[#F2F8F4] hover:text-[#008444] rounded transition-colors"
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

          {/* Right Actions: Find us & Log in Button */}
          <div className="hidden md:flex items-center gap-6">
            {/* Find Us */}
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-bold text-gray-800 hover:text-[#008444] transition-colors"
            >
              <svg className="w-5 h-5 text-[#008444]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Find us</span>
            </a>

            {/* Log in Button */}
            <div className="relative">
              <button
                onClick={() => {
                  setLoginOpen(!loginOpen);
                  if (langOpen) setLangOpen(false);
                  setOpenDropdown(null);
                }}
                className="bg-[#008444] hover:bg-[#007038] text-white text-sm font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 018 0v4" />
                </svg>
                <span>Log in</span>
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Exact Log in Dropdown Modal */}
              {loginOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white text-gray-900 border border-gray-200 rounded-xl shadow-2xl p-6 w-[360px] z-50 space-y-6 max-h-[85vh] overflow-y-auto">
                  {/* Title Bar */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-xl text-gray-900">Log in</h3>
                    <button
                      onClick={() => setLoginOpen(false)}
                      className="text-gray-500 hover:text-gray-800 text-lg font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Section 1: Online services */}
                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">Online services</h4>
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
                        <span className="font-bold italic text-base text-gray-800">AccèsD</span>
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#008444] hover:bg-[#007038] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        Go
                      </button>
                    </div>
                    <div className="space-y-1 pt-1 text-xs font-semibold">
                      <div>
                        <Link to="/login" onClick={() => setLoginOpen(false)} className="text-[#0066CC] hover:underline">
                          Learn more about AccèsD
                        </Link>
                      </div>
                      <div>
                        <Link to="/login" onClick={() => setLoginOpen(false)} className="text-[#0066CC] hover:underline">
                          Learn more about AccèsD Affaires
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Home and auto insurance */}
                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">Home and auto insurance</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoInsurance}
                          alt="Desjardins Insurance"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <span className="font-bold text-xs text-gray-800">Desjardins Insurance</span>
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#008444] hover:bg-[#007038] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        Go
                      </button>
                    </div>
                  </div>

                  {/* Section 3: Online brokerage */}
                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">Online brokerage</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoBrokerage}
                          alt="Desjardins Online Brokerage"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <span className="font-bold text-xs text-gray-800">Desjardins Disnat</span>
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#008444] hover:bg-[#007038] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        Go
                      </button>
                    </div>
                  </div>

                  {/* Section 4: Desjardins Securities */}
                  <div className="space-y-3 border-b border-gray-200/80 pb-5">
                    <h4 className="font-bold text-sm text-gray-900">Desjardins Securities</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logoSecurities}
                          alt="Desjardins Securities"
                          className="h-7 w-auto object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <span className="font-bold text-xs text-gray-800">Desjardins Securities</span>
                      </div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#008444] hover:bg-[#007038] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        Go
                      </button>
                    </div>
                  </div>

                  {/* Section 5: See other Desjardins sites */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm text-gray-900">See other Desjardins sites</h4>
                    <select
                      value={selectedOtherSite}
                      onChange={(e) => setSelectedOtherSite(e.target.value)}
                      className="w-full border border-gray-400 bg-white rounded-lg px-3 py-2 text-sm font-medium text-gray-800"
                    >
                      <option value="" disabled>Select</option>
                      <optgroup label="Personal">
                        <option value="private-mgt">Desjardins Private Management</option>
                        <option value="signature">Signature Service</option>
                        <option value="ind-ins">Individual insurance</option>
                        <option value="grs-members">Group Retirement Savings - Plan members</option>
                        <option value="gi-members">Group Insurance - Plan members</option>
                        <option value="ind-sav">Individual savings - Guaranteed investment funds</option>
                        <option value="us-banking-p">Desjardins Bank Online Banking - U.S.</option>
                      </optgroup>
                      <optgroup label="Business">
                        <option value="gi-admin">Group Insurance - Plan administrators</option>
                        <option value="employer-d">Employer D payroll</option>
                        <option value="grsp-sponsors">Group Retirement Savings Plan - Sponsors</option>
                        <option value="trust">Custody services - Desjardins Trust</option>
                        <option value="lc-express">LC Express D</option>
                        <option value="portfolio-funds">Your Portfolio Desjardins Funds</option>
                        <option value="us-banking-b">Desjardins Bank Online Banking - U.S.</option>
                        <option value="factoring">Desjardins Factoring</option>
                      </optgroup>
                    </select>
                    <div>
                      <button
                        onClick={handleGoLogin}
                        className="bg-[#008444] hover:bg-[#007038] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
                      >
                        Go
                      </button>
                    </div>
                  </div>

                  {/* Security Guarantee Link */}
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
                      <span className="underline">Security guarantee</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#008444]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-xl">
          <div className="p-4 border-b border-gray-100 flex gap-4">
            <button
              onClick={() => setActiveTab("Personal")}
              className={`flex-1 py-2 font-bold text-sm rounded ${
                activeTab === "Personal" ? "bg-[#008444] text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setActiveTab("Business")}
              className={`flex-1 py-2 font-bold text-sm rounded ${
                activeTab === "Business" ? "bg-[#008444] text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Business
            </button>
          </div>
          <div className="p-4 space-y-3">
            {["About us", "Careers", "Advice", "Contact us", "Find us"].map((link) => (
              <a key={link} href="#" className="block text-sm font-semibold text-gray-800 hover:text-[#008444]">
                {link}
              </a>
            ))}
            <button
              onClick={handleGoLogin}
              className="w-full bg-[#008444] text-white font-bold text-sm py-2.5 rounded-lg"
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
