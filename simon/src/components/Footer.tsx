

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-center">

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Åpningstider</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Mandag - Fredag: 10:00 - 19:00</li>
            <li>Lørdag: 10:00 - 17:00</li>
            <li>Søndag: Stengt</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="/simon-logo.png"
            alt="Simon Frisør logo"
            className="w-20 md:w-24 mb-2"
          />
          <p className="text-xs text-gray-400 mb-8">
            &copy; {new Date().getFullYear()} Simon Frisør
          </p>
          <p className="text-xs">Designet og utviklet av <a href="https://webloftet.no/" className="text-orange-300">Webloftet.no</a></p>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-300">
            Åpningstider på spesielle dager kan avvike. Følg gjerne med på Facebook.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100057434350942"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-sm"
          >
            
            Besøk oss på Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
