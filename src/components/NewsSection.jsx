import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";

const news = [
  {
    category: "Financial tips",
    date: "September 10, 2026",
    title: "5 ways to maximize your TFSA contributions this year",
    href: "#",
    img: news1,
  },
  {
    category: "Housing",
    date: "September 5, 2026",
    title: "Is now a good time to buy a home? What experts say",
    href: "#",
    img: news2,
  },
  {
    category: "Retirement",
    date: "August 28, 2026",
    title: "How to create a retirement income stream that lasts",
    href: "#",
    img: news3,
  },
];

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Advice and insights</h2>
            <p className="text-gray-500 mt-1">Tips and articles to help you make better financial decisions</p>
          </div>
          <a href="#" className="btn-outline hidden md:inline-flex">
            See all articles
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-[#009A44] uppercase">{item.category}</span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-base leading-snug group-hover:text-[#009A44] transition-colors">
                  {item.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center text-[#009A44] text-sm font-semibold gap-1">
                  Read more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <a href="#" className="btn-outline">See all articles</a>
        </div>
      </div>
    </section>
  );
}
