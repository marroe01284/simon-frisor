export default function Anmeldelser(){
    return(
        <section id="anmeldelser" className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Anmeldelser</h2>
  
        {/* Sitert anmeldelser */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="italic">"Meget fornøyd etter å ha vært hos Simon Frisør. En dyktig, hyggelig og profesjonell frisør. Anbefales!"</p>
            <p className="text-sm text-gray-600 mt-4">– Trond Sundal, 5/5 på Google</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="italic">"Dette er frisøren som er verdt et besøk. Simon er en veldig hyggelig mann og veldig flink!"</p>
            <p className="text-sm text-gray-600 mt-4">– Eirik Rosø, 5/5 på Google</p>
          </div>
        </div>
      </section>
    )
    
}