export default function CoopSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block bg-[#E8F5EE] text-[#009A44] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              About us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 leading-snug">
              A cooperative that puts<br />people before profit
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Desjardins is the largest cooperative financial group in North America and the fifth largest cooperative 
              and mutual financial group in the world. We exist to help people improve their economic and social well-being.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              As a member, you have a say in how we operate. Our profits are returned to our members and communities — 
              not to outside shareholders.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-green">Learn about Desjardins</a>
              <a href="#" className="btn-outline">Become a member</a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.desjardins.com/content/dam/images/photos/accueil/desjardins-cooperative.png"
              alt="Desjardins Cooperative"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80";
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-12">
          {[
            { num: "7.7M+", label: "Members and clients" },
            { num: "$437B+", label: "Assets under management" },
            { num: "1,100+", label: "Service outlets" },
            { num: "54,000+", label: "Employees" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#009A44] mb-1">{stat.num}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
