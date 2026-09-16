import { useLanguage } from "../context/LanguageContext";
import alarmClockImg from "../assets/alarm-clock.jpg";

export default function AlarmClock() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F2F4F5] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/60">
          <div className="bg-[#EFE6D8] w-full flex justify-center items-center py-6 px-4 md:py-10">
            <img
              src={alarmClockImg}
              alt={t.alarmClock.title}
              className="w-full max-w-2xl h-auto object-contain max-h-[380px]"
            />
          </div>

          <div className="p-6 md:p-8 space-y-3 bg-white">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {t.alarmClock.title}
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              {t.alarmClock.text}
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00874e] hover:underline group"
              >
                <span className="w-6 h-6 rounded-full bg-[#00874e] text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#00703c] transition-colors">
                  →
                </span>
                <span className="underline">{t.alarmClock.link}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
