export default function Priser() {
  const tjenester = [
    ["Herreklipp", "400 kr", "Drop-in"],
    ["Dameklipp", "500 kr", "Drop-in"],
    ["Barneklipp (opp til 10 år)", "300 kr", "Drop-in"],
    ["Skin fade herre", "500 kr", "Drop-in"],
    ["Honnør herre", "350 kr", "Drop-in"],
    ["Honnør dame", "450 kr", "Drop-in"],
    ["Skjeggtrim", "300 kr", "Drop-in"],
  ];

  return (
    <section id="priser" className="bg-white py-16 px-4 text-center border">
      <h2 className="text-3xl font-bold mb-10">Priser</h2>
      <div className="max-w-3xl mx-auto divide-y divide-gray-300">
        {tjenester.map(([tjeneste, pris, type], index) => (
          <div
            key={index}
            className="grid grid-cols-3 py-4 text-left text-sm md:text-base font-semibold"
          >
            <div>{tjeneste}</div>
            <div className="text-center">{pris}</div>
            <div className="text-right">{type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
