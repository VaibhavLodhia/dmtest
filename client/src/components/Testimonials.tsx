const clientLogos = [
  { name: "AT&T", logo: "/src/assets/att.jpeg" },
  { name: "Bridgestone", logo: "/src/assets/bridgestone.jpeg" },
  { name: "Fox", logo: "/src/assets/fox.png" },
  { name: "PVH", logo: "/src/assets/pvh.png" },
  { name: "Tory Burch", logo: "/src/assets/tory.png" },
  { name: "Washington", logo: "/src/assets/washington.jpeg" },
];

export const Testimonials = () => {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
            What Our Clients Saying
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Hear from Our Satisfied Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses who've transformed their digital presence with our marketing solutions
          </p>
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">RT</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-foreground">Richard T.</h4>
                <p className="text-sm text-muted-foreground">E-commerce Business Owner</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Varun Digital Media revolutionized our digital marketing. We saw a massive improvement in our traffic and sales in just six months!"
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">JO</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-foreground">Jason Orion</h4>
                <p className="text-sm text-muted-foreground">CEO, Tech Startup</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Their AI-powered solutions and real-time insights have been critical in scaling our business efficiently."
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">SM</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-foreground">Sam Paul</h4>
                <p className="text-sm text-muted-foreground">Marketing Director, Fashion Brand</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Outstanding creativity and strategic marketing. Our brand awareness and customer engagement have significantly increased."
            </p>
          </div>
        </div>

        {/* Moving client logos gallery */}
        <div className="relative overflow-hidden bg-muted/30 rounded-2xl py-8">
          <div className="flex animate-scroll-left">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center w-64 h-32 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-48 max-h-24 object-contain filter grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="text-sm font-medium text-gray-600">${client.name}</div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

