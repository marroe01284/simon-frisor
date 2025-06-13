export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 bg-amber-50 gap-12 w-full shadow flex flex-start items-center p-4">
          <h2 className="font-bold text-2xl">Simon Frisør</h2>
        <ul className="flex gap-4 font-semibold">
          <li><a href="#tjenester" className="hover:underline"></a>Tjenester</li>
          <li><a href="#åpningstider" className="hover:underline"></a>Åpningstider</li>
          <li><a href="#anmeldelser" className="hover:underline"></a>Anmeldeser</li>
          <li><a href="#besøk-oss" className="hover:underline"></a>Besøk oss</li>
        </ul>
      </nav>
    </>
  );
}
