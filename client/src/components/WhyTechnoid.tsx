import { Brain, TrendingUp, Target, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Insights",
    description: "Leverage predictive analytics, intelligent automation, and machine learning for optimized campaign performance."
  },
  {
    icon: TrendingUp,
    title: "End-to-End Expertise",
    description: "From SEO and PPC to web development and reputation management, we offer a comprehensive suite of services designed to maximize results."
  },
  {
    icon: Target,
    title: "ROI-Focused Strategies",
    description: "Our data-driven approach is designed to drive sustainable growth and measurable results."
  },
  {
    icon: BarChart3,
    title: "100% Transparent Reporting",
    description: "Stay informed with real-time analytics and performance dashboards."
  }
];

export const WhyTechnoid = () => {
  return (
    <section id="why-technoid" className="py-24 relative">
      {/* Translucent background with primary colors */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
            Why We Stand Out
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Unlock New Possibilities with{" "}
            <span className="text-primary">Varun Digital Media</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Grow steadily, grow boldly. Let's make your brand stand out with innovative digital marketing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-card group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};