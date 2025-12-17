export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8">
        About Me
      </h2>

      <div className="max-w-3xl text-gray-700 leading-relaxed space-y-5 text-center md:text-left">
        <p>
          I am <strong>Sugeng Hernawan</strong>, a 28-year-old Information Systems
          graduate from Universitas Kuningan (GPA 3.13/4.00), currently based in
          Kuningan, West Java, Indonesia.
        </p>

        <p>
          I have a strong background in <strong>IT Support</strong> and{" "}
          <strong>web-based system development</strong>, with hands-on experience
          in managing networks, servers, and enterprise information systems. I
          am known as a disciplined, responsible, and adaptable individual who
          works effectively both independently and within teams.
        </p>

        <p>
          From February 2019 to December 2024, I worked as a{" "}
          <strong>
            Coordinator of Hospital Management Information Systems
          </strong>{" "}
          at RSU KMC Luragung, where I managed operational data systems and
          supervised medical record filing processes.
        </p>

        <p>
          Currently, I work as an <strong>IT Support</strong> at Yayasan Badan
          Pendidikan Paripurna Indonesia (BPPI) in Baleendah, Bandung Regency. I
          am responsible for managing the school’s network infrastructure and
          servers. During this role, I have developed multiple internal
          applications and websites, and optimized the school network to ensure
          stable connectivity across all areas.
        </p>

        <p className="font-medium text-emerald-700">
          You can explore some of the applications and websites I have developed
          in the projects section below.
        </p>
      </div>
    </section>
  );
}
