import { useEffect, useState } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  const certifications = [
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      date: "October 2025",
      image: "/certificates/cert1.png", // put in public folder
      link: "https://drive.google.com/file/d/1ddofGnmb7zmTJItmLRPf4XpSh0etWNpR/view?usp=sharing",
    },
    {
      title: "Deep Learning",
      issuer: "Coursera",
      date: "Dec 2025",
      image: "/certificates/cert2.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/52TDUHJXJ2FU",
    },
    {
      title: "Legacy Responsive Web Design V8",
      issuer: "free Code Camp",
      date: "Nov 2023",
      image: "/certificates/cert3.png",
      link: "https://www.freecodecamp.org/certification/fcc1306a8bd-f620-46f4-af97-67cfa4a84ce6/responsive-web-design",
    },
  ];

  useEffect(() => setIsVisible(true), []);

  return (
    <section id="certifications" className="py-24 px-6">
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Professional credentials that validate my technical expertise and
          continuous learning journey.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  {cert.issuer}
                </span>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;