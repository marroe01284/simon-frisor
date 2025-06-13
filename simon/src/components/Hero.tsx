export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0  z-0" />

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Velkommen til Simon Frisør
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
          Klassisk klipp, moderne stil. Din lokale frisør i Oslo.
        </p>
        <a
          href="#priser"
          className="inline-block bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Se våre priser
        </a>
      </div>
    </section>
  );
}
