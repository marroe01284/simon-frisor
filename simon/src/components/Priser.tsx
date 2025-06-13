export default function Priser(){
    return(
        <section id="priser" className="bg-white text-black py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Priser</h2>
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span>Herreklipp</span>
            <span>350 kr</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Dameklipp</span>
            <span>450 kr</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Skjeggtrim</span>
            <span>200 kr</span>
          </div>
        </div>
      </section>
    )
}