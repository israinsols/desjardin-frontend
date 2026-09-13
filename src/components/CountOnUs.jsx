import { useState } from "react";

export default function CountOnUs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const articles = [
    {
      id: 1,
      tag: "Insurance",
      title: "How home insurance premiums are calculated",
      img: "https://www.desjardins.com/en/tips/how-home-insurance-premiums-are-calculated.thumb.768.768.jpg",
      href: "#",
    },
    {
      id: 2,
      tag: "Personal finance",
      title: "A guide to storing your important documents",
      img: "https://www.desjardins.com/en/tips/deep-clean-finances.thumb.768.768.jpg",
      href: "#",
    },
  ];

  return (
    <section className="bg-[#F2F4F5] py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Header */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Advice you can count on
          </h2>
          <p className="text-sm text-gray-600">
            Make informed decisions with our selection of articles.
          </p>
        </div>

        {/* 2 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  setSelectedIndex(idx);
                }}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-200 block flex flex-col justify-between      
            `}
              >
                {/* Image */}
                <div className="h-56 md:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80";
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#009A44] tracking-wide block mb-2">
                      {item.tag}
                    </span>
                    <h3
                      className={`text-base md:text-lg font-bold leading-snug ${
                        isSelected
                          ? "text-[#009A44] underline"
                          : "text-gray-900 hover:text-[#009A44] hover:underline"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Arrow Icon on Bottom Right */}
                  <div className="flex justify-end pt-4">
                    <svg
                      className="w-5 h-5 text-[#009A44]"
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
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00783A] hover:underline group"
          >
            <span className="w-6 h-6 rounded-full bg-[#009A44] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00783A] transition-colors">
              →
            </span>
            <span className="underline">See all our articles</span>
          </a>
        </div>
      </div>
    </section>
  );
}
