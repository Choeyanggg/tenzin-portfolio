import { Code, User, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div className="space-y-6 text-center max-w-md mx-auto">
            <h3 className="text-2xl font-semibold">
              Data & ML Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a B.Tech CSE student focused on Data Science and Machine Learning, with an interest in building practical, real-world solutions.
            </p>

            <p className="text-muted-foreground">
              I enjoy working with data, developing models, and continuously improving my skills in AI and problem-solving.
            </p>

            {/* Buttons Centered */}
            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <a href="mailto:tchoeyang2005@gmail.com" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1HpeyFoT27mlcplPgk-q50L5kA38hlnoN/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6">
            
           {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <Code className="text-primary" size={28} />

                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold">Data Science</h4>
                  <p className="text-muted-foreground">
                    Analyzing data, visualization, and insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <User className="text-primary" size={28} />

                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building predictive and intelligent models.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <Briefcase className="text-primary" size={28} />

                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold">Algorithms</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in problem-solving and optimization.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;