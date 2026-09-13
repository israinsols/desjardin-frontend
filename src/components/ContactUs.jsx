import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const [notesOpen, setNotesOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-white border-t-4 border-t-[#00874e] pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contactUs.title}</h2>

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <div className="mb-3">
                <svg
                  className="w-7 h-7 text-[#00874e]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </div>
              <p className="font-bold text-gray-900 mb-1.5">{t.contactUs.phoneTitle}</p>
              <p className="text-sm mb-1">
                <a
                  href="tel:18002247737"
                  className="text-[#00874e] font-semibold underline hover:text-[#00703c]"
                >
                  1-800-224-7737
                </a>
                <span className="text-gray-500 ml-1">(1-800-CAISSES)</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">{t.contactUs.phoneSub}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-gray-800 text-gray-800 text-sm font-semibold px-4 py-2 rounded hover:bg-gray-50 transition-colors"
              >
                {t.contactUs.scheduleCall}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <button
            onClick={() => setNotesOpen(!notesOpen)}
            className="w-full flex items-center gap-3 py-5 text-left group"
          >
            <span className="text-gray-600 text-lg font-light leading-none w-4 flex-shrink-0 select-none">
              {notesOpen ? "−" : "+"}
            </span>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
              {t.contactUs.notes}
            </span>
          </button>
          <div className="border-b border-gray-300" />

          {notesOpen && (
            <div className="py-5 text-sm text-gray-600 leading-relaxed max-w-2xl">
              <p className="mb-2">
                {t.contactUs.notesText1}
              </p>
              <p>
                {t.contactUs.notesText2}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
