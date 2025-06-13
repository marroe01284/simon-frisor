export default function Navbar() {
  return (
    <header className="bg-black text-white py-8 flex flex-col items-center gap-4">
    <img
      src="/simon-logo.png"
      alt="Simon Frisør logo"
      className="w-32 md:w-48"
    />
    <nav>
      <ul className="flex gap-8 text-sm md:text-base font-medium">
        <li><a href="#tjenester" className="hover:underline">Tjenester</a></li>
        <li><a href="#aapningstider" className="hover:underline">Åpningstider</a></li>
        <li><a href="#anmeldelser" className="hover:underline">Anmeldelser</a></li>
        <li><a href="#besok" className="hover:underline">Besøk Oss</a></li>

      </ul>
    </nav>
  </header>
  );
}
