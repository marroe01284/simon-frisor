export default function Besok() {
  return (
    <section id="besokoss" className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Besøk oss</h2>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7997.636777035535!2d10.726447!3d59.92535199999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd7f43be99d%3A0xf79fc600014148ad!2sSimon%20Fris%C3%B8r!5e0!3m2!1sno!2sno!4v1749836722132!5m2!1sno!2sno"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded shadow"
        ></iframe>
      </div>
    </section>
  );
}
