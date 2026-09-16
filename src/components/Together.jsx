import { useLanguage } from "../context/LanguageContext";
import togetherImg from "../assets/together.png";

export default function Together() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#D2EBD9] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t.together.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t.together.subTitle}
                <sup className="text-xs ml-1 text-gray-600">[ 3 ]</sup>
              </p>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-gray-900">
                {t.together.youthTitle}
              </h3>
              <p className="text-sm text-gray-700">
                {t.together.youthText}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline pt-1"
              >
                <span className="w-5 h-5 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold">
                  →
                </span>
                <span className="underline">{t.together.youthLink}</span>
              </a>
            </div>

            <div className="space-y-1.5 pt-2">
              <h3 className="text-base font-bold text-gray-900">
                {t.together.greenTitle}
              </h3>
              <p className="text-sm text-gray-700">
                {t.together.greenText}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline pt-1"
              >
                <span className="w-5 h-5 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold">
                  →
                </span>
                <span className="underline">{t.together.greenLink}</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative max-w-md w-full">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={togetherImg}
                  alt={t.together.title}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            {t.together.memberTitle}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
            {t.together.memberText1}
            <a href="#" className="text-[#00874e] underline font-semibold">
              {t.together.memberRistournes}
            </a>
            {t.together.memberText2}
            <sup className="text-xs ml-1 text-gray-600">[ 4 ]</sup>
          </p>
          {/* <p className="text-xs font-semibold text-gray-600 pt-1">
            {t.together.ready}
          </p> */}
          <div className="pt-1">
            <a
              href="#"
              className="inline-block bg-[#00874e] hover:bg-[#00703c] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              {t.together.becomeMember}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
