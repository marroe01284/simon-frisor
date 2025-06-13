export default function Footer(){
    return(
        <footer className="bg-black text-white py-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <img src="/simon-logo.png" alt="Simon Frisør logo" className="w-20 md:w-24" />
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Simon Frisør. Alle rettigheter reservert.</p>
        </div>
      </footer>
    )
}