export default function WhatToDo() {
  const cards = [
    {
      title: "Compare credit cards",
      href: "#",
      icon: (
        <svg className="w-7 h-7 text-[#009A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <rect x="2" y="5" width="20" height="14" rx="3" />
          <path strokeLinecap="round" d="M2 10h20" />
          <path strokeLinecap="round" d="M6 15h4" />
        </svg>
      ),
    },
    {
      title: "Buy a home",
      href: "#",
      icon: (
        <svg className="w-7 h-7 text-[#009A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a1 1 0 001-1V10" />
        </svg>
      ),
    },
    {
      title: "Find insurance coverage",
      href: "#",
      icon: (
        <svg className="w-7 h-7 text-[#009A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9 0 0 4.5 1.5 9 1.5s9-1.5 9-1.5c0-4.97-4.03-9-9-9zM12 13.5V21" />
        </svg>
      ),
    },
    {
      title: "Take out a personal loan",
      href: "#",
      icon: (
        <svg className="w-7 h-7 text-[#009A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6m0 0a3 3 0 100 6 3 3 0 000-6zm-7 8c1.5 2 4.5 3 7 3s5.5-1 7-3M3 17h18" />
        </svg>
      ),
    },
    {
      title: "Learn about our accounts and services",
      href: "#",
      icon: (
        <svg className="w-7 h-7 text-[#009A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Save and invest for the future",
      href: "#",
      icon: (
        <svg className="w-7 h-7 text-[#009A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-14 px-4 border-b border-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What would you like to do today?
        </h2>

        {/* 3x2 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group flex flex-col justify-between p-6 bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[140px]"
            >
              {/* Icon */}
              <div className="mb-4">{card.icon}</div>

              {/* Title and Arrow Row */}
              <div className="flex items-end justify-between gap-2">
                <span className="text-sm font-bold text-gray-800 leading-snug">
                  {card.title}
                </span>
                <svg
                  className="w-4 h-4 text-[#009A44] flex-shrink-0 group-hover:translate-x-1 transition-transform mb-0.5"
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
