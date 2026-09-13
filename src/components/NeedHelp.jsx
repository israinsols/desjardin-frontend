export default function NeedHelp() {
  const items = [
    { title: "Report fraud", href: "#" },
    { title: "Dispute a credit card charge", href: "#" },
    { title: "File an insurance claim", href: "#" },
    { title: "See our FAQs", href: "#" },
  ];

  return (
    <section className="bg-white py-14 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Header */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Need help?
          </h2>
          <p className="text-sm text-gray-600">
            Let us point you in the right direction.
          </p>
        </div>

        {/* 4 Help Pill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex items-center justify-between p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-sm font-bold text-gray-800 pr-2">
                {item.title}
              </span>
              <svg
                className="w-4 h-4 text-[#009A44] flex-shrink-0 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
