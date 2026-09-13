import { useState } from "react";

export default function ContactUs() {
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <>
      {/* Contact us - white section with teal top border */}
      <section className="bg-white border-t-4 border-t-[#009A44] pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact us</h2>

          <div className="flex flex-col sm:flex-row gap-10">
            {/* By phone */}
            <div>
              {/* Green phone icon */}
              <div className="mb-3">
                <svg
                  className="w-7 h-7 text-[#009A44]"
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
              <p className="font-bold text-gray-900 mb-1.5">By phone</p>
              <p className="text-sm mb-1">
                <a
                  href="tel:18002247737"
                  className="text-[#009A44] font-semibold underline hover:text-[#00783A]"
                >
                  1-800-224-7737
                </a>
                <span className="text-gray-500 ml-1">(1-800-CAISSES)</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">We can call you when it&#39;s convenient.</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-gray-800 text-gray-800 text-sm font-semibold px-4 py-2 rounded hover:bg-gray-50 transition-colors"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Notes accordion - light gray section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Accordion row */}
          <button
            onClick={() => setNotesOpen(!notesOpen)}
            className="w-full flex items-center gap-3 py-5 text-left group"
          >
            {/* + / - icon */}
            <span className="text-gray-600 text-lg font-light leading-none w-4 flex-shrink-0 select-none">
              {notesOpen ? "−" : "+"}
            </span>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
              Notes
            </span>
          </button>
          {/* Divider line */}
          <div className="border-b border-gray-300" />

          {/* Expanded notes content */}
          {notesOpen && (
            <div className="py-5 text-sm text-gray-600 leading-relaxed max-w-2xl">
              <p className="mb-2">
                Desjardins caisses are cooperative financial institutions. They are members of
                Fédération des caisses Desjardins du Québec and offer personal and business financial services.
              </p>
              <p>
                Subject to credit approval. Terms and conditions apply. See your caisse for details.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
