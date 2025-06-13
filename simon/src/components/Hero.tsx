export default function Hero(){
    return(
        <section id="hjem" className="min-h-120 flex flex-col justify-center items-center bg-black text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Velkommen til Simon Frisør</h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">Profesjonell hårklipp og styling i hjertet av byen. Bestill din time i dag.</p>
        <a href="#priser" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">Se priser</a>
      </section>
    )
}