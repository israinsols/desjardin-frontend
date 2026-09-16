import planProjectsImg from "../assets/plan-projects.png";

const plans = [
  {
    icon: "🏠",
    title: "Become a homeowner",
    desc: "Get the mortgage that works for you with competitive rates and flexible terms.",
    href: "#",
  },
  {
    icon: "📈",
    title: "Plan your retirement",
    desc: "RRSPs, TFSAs and group retirement plans to build your future nest egg.",
    href: "#",
  },
  {
    icon: "🎓",
    title: "Save for education",
    desc: "Start saving early for your children's post-secondary education.",
    href: "#",
  },
  {
    icon: "🚗",
    title: "Finance your vehicle",
    desc: "Competitive auto financing rates for new and used vehicles.",
    href: "#",
  },
];

export default function PlanSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-14 items-center">
        {/* Left image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img
              src={planProjectsImg}
              alt="Plan your projects"
              className="w-full max-w-sm rounded-2xl"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Plan your life projects
          </h2>
          <p className="text-gray-500 mb-8">
            Whatever your goals, we have the products and advice to help you get there.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {plans.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group flex gap-4 p-5 border border-gray-100 rounded-xl hover:border-[#009A44] hover:shadow-sm transition-all duration-200"
              >
                <span className="text-3xl mt-0.5">{p.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1 group-hover:text-[#009A44] transition-colors">{p.title}</p>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
