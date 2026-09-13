export default function Newsletter() {
  return (
    <section className="bg-[#00783A] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white">
          <h2 className="text-lg font-bold mb-1">Member — more than just your savings</h2>
          <p className="text-white/80 text-sm">Get exclusive offers, financial tips, and advice delivered to your inbox.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 md:w-72 px-4 py-2.5 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-[#009A44] text-sm font-bold px-5 py-2.5 rounded hover:bg-gray-100 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
