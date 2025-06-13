export default function Besok(){
    return(
        <section className="bg-black py-16 px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-8">Her finner du oss</h2>
               {/* Google Maps med anmeldelser */}
        <div className="max-w-3xl mx-auto mb-12 text-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3998.8183523613675!2d10.726446699999999!3d59.925352299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd7f43be99d%3A0xf79fc600014148ad!2sSimon%20Fris%C3%B8r!5e0!3m2!1sno!2sno!4v1749834350931!5m2!1sno!2sno"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="rounded border shadow"
          ></iframe>
          <p className="mt-2 text-sm text-white">
            Se alle anmeldelser på <a href="https://goo.gl/maps/gTYysJSdLqKwhg1eA" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Google</a>
          </p>
        </div>
        </section>
    )
}