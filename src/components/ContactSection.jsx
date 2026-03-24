import { useState, useEffect } from "react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      console.log("Message sent:", formData);
      setIsSending(false);
      setIsSent(true);

      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 2500);
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-background text-foreground py-24 px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0 translate-y-6"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-primary">Get In Touch</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">

          {/* CONTACT FORM */}
          <div className="md:col-span-3">
            <div className="bg-card border border-border rounded-xl p-8">

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="text-sm text-muted-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending || isSent}
                  className={`w-full py-3 rounded-lg font-medium transition ${
                    isSent
                      ? "bg-green-600"
                      : "bg-primary hover:opacity-90"
                  }`}
                >
                  {isSending
                    ? "Sending..."
                    : isSent
                    ? "Message Sent!"
                    : "Send Message"}
                </button>

              </form>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8 h-full flex flex-col">

              <h3 className="text-xl font-semibold text-primary mb-6 text-left">
                Contact Info
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4 text-left">
                  <span className="text-xl mt-1">✉️</span>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:tchoeyang2005@gmail.com"
                      className="hover:text-primary"
                    >
                      tchoeyang2005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <span className="text-xl mt-1">📱</span>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+917559765233"
                      className="hover:text-primary"
                    >
                      +91-7559765233
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <span className="text-xl mt-1">🔗</span>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/tenzinchoeyang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      linkedin.com/in/tenzinchoeyang
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <span className="text-xl mt-1">💻</span>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a
                      href="https://github.com/Choeyanggg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      github.com/Choeyanggg
                    </a>
                  </div>
                </div>

              </div>

              <div className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground">
                Looking forward to connecting with you.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;