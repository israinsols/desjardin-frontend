const promos = [
  {
    tag: "Mortgage",
    title: "Your dream home is within reach",
    desc: "Take advantage of competitive mortgage rates and personalized guidance from our advisors.",
    cta: "Explore mortgages",
    color: "bg-[#E8F5EE]",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
  {
    tag: "Savings",
    title: "Make your money grow smarter",
    desc: "Open a TFSA, RRSP or FHSA today and start building the future you want.",
    cta: "Start saving",
    color: "bg-blue-50",
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80",
  },
  {
    tag: "Insurance",
    title: "Protect what matters most",
    desc: "Home, auto, and life insurance designed to give you peace of mind every day.",
    cta: "Get a quote",
    color: "bg-orange-50",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
];

export default function PromoCards() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Financial services built for you
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((p) => (
            <div
              key={p.title}
              className={`${p.color} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-[#009A44] uppercase tracking-wider mb-2">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-5 flex-1">{p.desc}</p>
                <a
                  href="#"
                  className="btn-green self-start"
                >
                  {p.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
