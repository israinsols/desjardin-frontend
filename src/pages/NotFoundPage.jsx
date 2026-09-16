export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-black select-none" style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}>
      <div className="flex items-center gap-8 md:gap-12">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-black leading-none">
          404
        </h1>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 leading-snug">
            Page not found!
          </h2>
          <p className="text-gray-800 text-base md:text-lg font-normal leading-normal">
            The requested page was not found
          </p>
        </div>
      </div>
    </div>
  );
}
