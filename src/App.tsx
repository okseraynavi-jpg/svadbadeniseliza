import { motion } from "framer-motion";

function Section({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`mx-auto w-full max-w-xl px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-center font-lora font-light tracking-wide ${className}`}
      style={{ fontSize: "2.2rem", lineHeight: 1.2, color: "#5f4434" }}
    >
      {children}
    </h2>
  );
}

export default function App() {
  // Фото с чёрно-белыми образами и одеждой — для раздела «Дресс-код подружек невесты»
  const dresscodePhotos = [
    "https://live.staticflickr.com/65535/55343220786_5b17386d50_b.jpg",
    "https://live.staticflickr.com/65535/55342293602_21c5d08fd9_b.jpg",
    "https://live.staticflickr.com/65535/55343635500_6315009259_b.jpg",
    "https://live.staticflickr.com/65535/55342293532_3d0b2c54fc_b.jpg",
    "https://live.staticflickr.com/65535/55342293742_2a2106fdbb_b.jpg",
    "https://live.staticflickr.com/65535/55343371713_07e730aa91_b.jpg",
    "https://live.staticflickr.com/65535/55343371718_2871b8ca2e_b.jpg",
    "https://live.staticflickr.com/65535/55343635745_d73edb615a_b.jpg",
  ];

  // Остальные фото из альбома — для других разделов сайта
  const couplePhotos = {
    main: "https://live.staticflickr.com/65535/55343436249_d505f5d28b_b.jpg",
    second: "https://live.staticflickr.com/65535/55343371653_690862f204_b.jpg",
  };

  const timing = [
    { time: "13:30", event: "Трансфер" },
    { time: "15:30", event: "Фуршет" },
    {
      time: "16:00",
      event: "Церемония",
      place: "место: у основания скалы",
    },
    {
      time: "17:00",
      event: "Банкет",
      place: "место: ресторан «Утес» / главный корпус",
    },
    { time: "23:00", event: "Завершение вечера" },
    { time: "23:10", event: "Трансфер обратно" },
  ];

  const buttonStyle = {
    borderColor: "#5f4434",
    color: "#5f4434",
    backgroundColor: "transparent",
  } as const;

  return (
    <div
      className="min-h-screen font-lora pb-16"
      style={{
        background:
          "linear-gradient(180deg, #f7edd8 0%, #f7edd8 54%, #ddd0bd 54%, #ddd0bd 100%)",
        color: "#5f4434",
      }}
    >
      <Section className="pt-14 pb-3 text-center" delay={0}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          className="font-lora font-light tracking-wide"
          style={{ fontSize: "2.2rem", lineHeight: 1.2, color: "#5f4434" }}
        >
          Денис и Елизавета
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-base font-light tracking-[0.25em] uppercase"
          style={{ color: "#c7a6a7" }}
        >
          08.08.2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-1 text-sm font-light"
          style={{ color: "#a7b094" }}
        >
          База отдыха «Утес»
        </motion.p>
      </Section>

      <Section className="py-4" delay={0.2}>
        <div style={{ backgroundColor: "#d7d4d8" }}>
          <img
            src={couplePhotos.main}
            alt="Денис и Елизавета"
            className="h-auto w-full object-cover rounded-lg"
            style={{ aspectRatio: "3 / 4" }}
          />
        </div>
      </Section>

      <Section className="py-4" delay={0.4}>
        <p className="text-left text-base font-light leading-relaxed">
          С радостью спешим сообщить, что вы приглашены на нашу свадьбу, где вы
          сможете хорошо отдохнуть, от души повеселиться и прекрасно провести
          вместе с нами этот важный для нас день!
        </p>
      </Section>

      <Section className="py-6" delay={0.2}>
        <Heading className="mb-6">ТАЙМИНГ**</Heading>
        <div className="space-y-4">
          {timing.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              className="text-left"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="min-w-[3.5rem] text-sm font-normal tracking-wide"
                  style={{ color: "#c7a6a7" }}
                >
                  {item.time}
                </span>
                <span className="text-base font-light">{item.event}</span>
              </div>
              {item.place && (
                <p
                  className="ml-[4.5rem] mt-0.5 text-xs font-light"
                  style={{ color: "#a7b094" }}
                >
                  {item.place}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-4" delay={0.2}>
        <div style={{ backgroundColor: "#d7d4d8" }}>
          <img
            src="https://live.staticflickr.com/65535/55349318632_e9d0f91b62_b.jpg"
            alt="База отдыха Утес"
            className="h-auto w-full object-cover rounded-lg"
            style={{ aspectRatio: "16 / 9" }}
          />
        </div>
      </Section>

      <Section className="py-6 text-center" delay={0.2}>
        <Heading className="mb-4">Локация</Heading>
        <p className="mb-5 text-sm font-light leading-relaxed">
          База отдыха «Утес»
          <br />
          г. Чебаркуль, Челябинская область
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://yandex.ru/maps/-/CTAVzLlA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border px-8 py-2.5 text-sm font-normal tracking-wide transition duration-300 hover:text-[#f7edd8]"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5f4434";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Точка сбора
          </a>
          <a
            href="https://yandex.ru/maps/-/CTAV7PKQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border px-8 py-2.5 text-sm font-normal tracking-wide transition duration-300 hover:text-[#f7edd8]"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5f4434";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Место проведения
          </a>
        </div>
      </Section>

      <Section className="py-6" delay={0.2}>
        <Heading className="mb-4">Как добраться</Heading>
        <p className="text-left text-sm font-light leading-relaxed">
          Вас будет ожидать автобус для трансфера. Место встречи и точное время
          уточняются после подтверждения вашего участия
        </p>
      </Section>

      <Section className="py-4" delay={0.2}>
        <div style={{ backgroundColor: "#ddd0bd" }}>
          <img
            src={couplePhotos.second}
            alt="Денис и Елизавета"
            className="h-auto w-full object-cover rounded-lg"
            style={{ aspectRatio: "2 / 3" }}
          />
        </div>
      </Section>

      <Section className="py-6" delay={0.2}>
        <Heading className="mb-6">Дресс-код подружек невесты</Heading>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {dresscodePhotos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              style={{ backgroundColor: "#d7d4d8" }}
            >
              <img
                src={src}
                alt={`Референс образа для подружки невесты ${i + 1}`}
                className="h-full w-full object-cover rounded-lg"
                style={{ aspectRatio: "3 / 4" }}
              />
            </motion.div>
          ))}
        </div>
        <div
          className="mt-5 p-5"
          style={{ backgroundColor: "rgba(215, 212, 216, 0.4)" }}
        >
          <p className="text-left text-sm font-light leading-relaxed">
            Для подружек невесты мы предлагаем элегантные образы в чёрно-молочной
            гамме: платья, костюмы или юбочные комплекты с лаконичным силуэтом.
            Приветствуются молочные акценты, жемчуг, тонкие платки и минималистичные
            аксессуары.
          </p>
          <div className="mt-4 space-y-2 text-left text-sm font-light">
            <p>
              <span style={{ color: "#c7a6a7" }}>•</span> чёрный как основа образа
            </p>
            <p>
              <span style={{ color: "#c7a6a7" }}>•</span> молочные, айвори и жемчужные детали
            </p>
            <p>
              <span style={{ color: "#c7a6a7" }}>•</span> строгие линии, костюмные ткани, атлас или кружево
            </p>
            <p>
              <span style={{ color: "#c7a6a7" }}>•</span> без ярких принтов и активных цветных акцентов
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-6 text-center" delay={0.2}>
        <Heading className="mb-5">Подтвердить участие</Heading>
        <p className="mb-6 text-sm font-light leading-relaxed">
          Пожалуйста, заполните форму до 1 августа 2026 года, чтобы мы могли
          подготовиться и встретить вас как следует
        </p>
        <a
          href="https://forms.gle/1Lb1AaakLEyWSTVP7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border px-10 py-2.5 text-sm font-normal tracking-wide transition duration-300 hover:text-[#f7edd8]"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#5f4434";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Ответить в Google Форме
        </a>
      </Section>

      <Section className="py-8 text-center" delay={0.2}>
        <Heading className="mb-5">Контакты</Heading>
        <div className="space-y-5 text-sm font-light">
          <div>
            <p style={{ color: "#a7b094" }} className="mb-1">
              Ирина — координатор
            </p>
            <a
              href="tel:+79613567501"
              className="underline underline-offset-4"
              style={{ textDecorationColor: "#c7a6a7" }}
            >
              +7 961 356 75 01
            </a>
            <p className="mt-1 text-xs" style={{ color: "#a7b094" }}>
              WhatsApp / Telegram
            </p>
          </div>
          <div>
            <p style={{ color: "#a7b094" }} className="mb-1">
              Елизавета — невеста
            </p>
            <a
              href="tel:+79823228434"
              className="underline underline-offset-4"
              style={{ textDecorationColor: "#c7a6a7" }}
            >
              +7 982 322 84 34
            </a>
            <p className="mt-1 text-xs" style={{ color: "#a7b094" }}>
              WhatsApp / Telegram
            </p>
          </div>
        </div>
      </Section>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
        className="pt-6 pb-8 text-center text-xs font-light"
        style={{ color: "#c7a6a7" }}
      >
        Денис и Елизавета · 08.08.2026
      </motion.footer>
    </div>
  );
}
