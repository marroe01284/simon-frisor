import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

const anmeldelser = [
  {
    navn: "Trond Sundal",
    tekst: "Meget fornøyd etter å ha vært hos Simon Frisør. En dyktig, hyggelig og profesjonell frisør. Anbefales!",
  },
  {
    navn: "Eirik Rosø",
    tekst: "Dette er frisøren som er verdt et besøk. Simon er en veldig hyggelig mann og veldig flink til å klippe både store og små.",
  },
  {
    navn: "Annichen Large",
    tekst: "Fantastisk service og resultat – kommer definitivt tilbake!",
  },
]

export default function Anmeldelser() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

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
                <div className="bg-gray-100 rounded p-6 shadow w-full h-full flex flex-col justify-between text-left">
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
          className="bg-gray-300 hover:bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center text-xl"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          className="bg-gray-300 hover:bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center text-xl"
        >
          ›
        </button>
      </div>
    </section>
  )
}
