export default function Page() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 items-center justify-center">
      <div className="col-span-1">
        <img src="/assets/hagai-london.jpg" alt="Hagai in London" className="image max-w-full" />
      </div>
      <div className="col-span-2">
        <section className="md:ml-8 mt-8 md:mt-2">
          <h1 className="text-3xl font-semibold tracking-tighter font-mono">
            Horas, Mejuah-juah! 👋
          </h1>
          <h2 className="mb-4 text-xl tracking-tighter font-mono">
            I’m <span className="font-bold">Hagai,</span> an AI Engineer based in London, UK 🇬🇧
          </h2>
          <p className="mb-4 font-sans">
          {`Hi there! I’m Hagai, an AI researcher and engineer originally from Indonesia, with a penchant for solving complex problems using cutting-edge algorithms. Armed with a master’s degree from Sejong University (4.5 GPA, I’m serious!), I’ve spent the last few years developing AI solutions for satellite imagery and remote sensing, making sure our planet is mapped better than ever!`}
          </p>
          <p className="mb-4 font-sans">
          {`My expertise spans object detection, few-shot segmentation, and even super-resolution—think of it as making low-res images magically clear! Alongside AI, I’ve dabbled in finance, startups, and politics. Also, did I mention I love tackling AI challenges? From ESA to KARI, I’m always testing new algorithms in global competitions.`}
          </p>
          <p className="mb-4 font-sans">
          {`When I’m not glued to my screen, you’ll find me running through the city’s parks. It’s my all-in-one: staying fit, meeting new people, and sparking fresh ideas for my next AI project. I'll post it here, so stay tuned!`}
          </p>
        </section>
      </div>
    </div>
  )
}
