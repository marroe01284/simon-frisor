import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const anmeldelser = [
  {
    navn: "Trond Sundal",
    tekst:
      "Meget fornøyd etter å ha vært hos Simon Frisør. En dyktig, hyggelig og profesjonell frisør. Anbefales!",
  },
  {
    navn: "Eirik Rosø",
    tekst:
      "Dette er frisøren som er verdt et besøk. Simon er en veldig hyggelig mann og veldig flink til å klippe både store og små.",
  },
  {
    navn: "Annichen Large",
    tekst: "Fantastisk service og resultat – kommer definitivt tilbake!",
  },
  {
    navn: "Pia Prestmo",
    tekst:
      "Vår famile har klipt oss hos Simon i en årekke og kan anbefale ham på det sterkeste. Dyktig, serviceminded og svært hyggelig betjening.",
  },
  {
    navn: "Søren Mohn",
    tekst:
      "Nydelig sted, kjempegod service og veldig fornøyd med klippen. kommer kun her og klipper meg. :)",
  },
];

export default function Anmeldelser() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="anmeldelser" className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Hva sier kundene?</h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {anmeldelser.map((item, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] px-4"
            >
              <div className="h-full flex items-stretch">
                <div className="bg-Tert rounded p-6 shadow-xl w-full h-full flex flex-col justify-between text-left">
                  <p className="italic mb-4">"{item.tekst}"</p>
                  <p className="text-sm text-gray-600 mt-auto">– {item.navn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={scrollPrev}
          className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="max-w-xl mx-auto mb-10 mt-10">
        <p className="text-lg text-gray-700 font-medium">
          Vi er stolte av våre ⭐ {" "}
          <span className="font-bold text-yellow-500">4,9 av 5</span> på Google!
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Vi setter stor pris på hver eneste tilbakemelding og jobber hver dag
          for å gi deg den beste frisøropplevelsen.
        </p>
        <a
          href="https://www.google.com/search?q=Simon+Frisør+Oslo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 hover:underline text-sm"
        >
          Se alle anmeldelser på Google →
        </a>
      </div>
    </section>
  );
}
