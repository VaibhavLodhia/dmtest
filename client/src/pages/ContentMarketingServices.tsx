import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, FileText, TrendingUp, Users, Video, Mail, BookOpen, Image, PenTool, BarChart3 } from "lucide-react";

export const ContentMarketingServices = () => {
  const contentTypes = [
    {
      title: "SEO Blog Writing",
      description: "Long-form, SEO-optimized blog content for sustained traffic growth and brand authority.",
      icon: <PenTool className="w-8 h-8 text-primary" />,
      features: ["Keyword-rich articles", "Strategic internal linking", "Voice search optimization", "Structured content"]
    },
    {
      title: "Video Content Creation",
      description: "Engaging video scripts and content for YouTube, TikTok, and social media platforms.",
      icon: <Video className="w-8 h-8 text-primary" />,
      features: ["Script writing", "Promotional videos", "Explainer content", "Animated videos"]
    },
    {
      title: "Email Marketing Content",
      description: "Personalized email sequences and newsletters designed for lead nurturing and conversions.",
      icon: <Mail className="w-8 h-8 text-primary" />,
      features: ["Lead sequences", "Subject line optimization", "Monthly newsletters", "Automation content"]
    },
    {
      title: "Visual Content Design",
      description: "Infographics, data visualizations, and visual storytelling for better engagement.",
      icon: <Image className="w-8 h-8 text-primary" />,
      features: ["Infographic design", "Data visualization", "Social media graphics", "Brand consistency"]
    }
  ];

  const benefits = [
    {
      title: "Organic Traffic Growth",
      description: "Quality content improves SEO rankings and generates 3x more leads than traditional advertising.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      metric: "3x More Leads"
    },
    {
      title: "Brand Authority & Trust",
      description: "Consistent valuable content builds customer trust and positions your brand as an industry leader.",
      icon: <Users className="w-8 h-8 text-primary" />,
      metric: "Higher Conversions"
    },
    {
      title: "Customer Retention",
      description: "Engaging content keeps audiences coming back and builds long-term customer relationships.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      metric: "Increased Loyalty"
    }
  ];

  const services = [
    {
      title: "Content Strategy & Planning",
      description: "Data-backed content strategies with industry research and competitor analysis for growth opportunities.",
      details: ["Industry research & analysis", "High-value keyword research", "Multi-channel content planning", "Content calendar creation"]
    },
    {
      title: "Website Content Development",
      description: "Conversion-focused landing pages and product descriptions tailored to audience intent.",
      details: ["Landing page optimization", "Product descriptions", "Sales funnel content", "User experience writing"]
    },
    {
      title: "Social Media Content Writing",
      description: "Platform-specific content creation for Facebook, LinkedIn, Instagram with storytelling focus.",
      details: ["Platform-specific content", "Storytelling-driven posts", "AI-powered optimization", "Engagement strategies"]
    },
    {
      title: "Long-form Content Creation",
      description: "Authoritative whitepapers, eBooks, and case studies that establish industry expertise.",
      details: ["Research-driven whitepapers", "Lead-generating eBooks", "Success-driven case studies", "Industry thought leadership"]
    },
    {
      title: "Content Distribution & Promotion",
      description: "Strategic content distribution across multiple channels for maximum visibility and reach.",
      details: ["Paid ad promotions", "PR placements", "Guest blogging", "Influencer collaborations"]
    },
    {
      title: "Performance Analytics & Optimization",
      description: "Data-driven insights and monthly performance tracking to refine content strategies.",
      details: ["SEO performance tracking", "Engagement analysis", "Keyword ranking audits", "ROI measurement"]
    }
  ];

  const industries = [
    {
      name: "SaaS & Technology",
      description: "Technical documentation, product guides, and thought leadership content for tech audiences.",
      icon: "💻",
      specialties: ["API documentation", "Technical blogs", "Product tutorials", "Developer content"]
    },
    {
      name: "E-commerce & Retail",
      description: "Product descriptions, buying guides, and seasonal campaign content that drives sales.",
      icon: "🛍️",
      specialties: ["Product copywriting", "Buying guides", "Seasonal campaigns", "Customer testimonials"]
    },
    {
      name: "Healthcare & Wellness",
      description: "Educational content, patient resources, and wellness guides with regulatory compliance.",
      icon: "🏥",
      specialties: ["Medical content", "Patient education", "Wellness guides", "Compliance writing"]
    },
    {
      name: "Finance & Legal",
      description: "Complex financial concepts simplified through educational content and regulatory updates.",
      icon: "💼",
      specialties: ["Financial education", "Legal content", "Compliance guides", "Industry analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <FileText className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Content Marketing
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Create compelling, high-quality content that engages your audience and drives organic traffic. From blogs to videos, we craft content that converts visitors into customers.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">SEO Optimized</Badge>
              <Badge variant="secondary">Multi-Channel</Badge>
              <Badge variant="secondary">AI-Powered</Badge>
              <Badge variant="secondary">Conversion Focused</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* What is Content Marketing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is Content Marketing?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Content marketing is a strategic approach that involves creating, publishing, and distributing valuable, relevant, and consistent content across online platforms to attract and retain a clearly defined audience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3" />
                    <div>
                      <h3 className="font-semibold mb-1">SEO-Optimized Content</h3>
                      <p className="text-sm text-muted-foreground">Boost search engine rankings and drive organic traffic</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Thought Leadership & Storytelling</h3>
                      <p className="text-sm text-muted-foreground">Build brand trust and establish industry authority</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3" />
                    <div>
                      <h3 className="font-semibold mb-1">AI-Powered Content Engineering</h3>
                      <p className="text-sm text-muted-foreground">Efficient, scalable content creation and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2">AI Content Assistant</h3>
                  <p className="text-muted-foreground text-sm">
                    Our AI-powered content creation tools help generate blog posts, social media content, and video scripts at scale while maintaining brand consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Marketing is Essential */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Content Marketing is Essential</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center mb-4">{benefit.description}</p>
                    <div className="text-center">
                      <Badge variant="outline" className="text-primary border-primary">
                        {benefit.metric}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Content Types We Create</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {type.icon}
                      <CardTitle className="ml-3 text-xl">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Content Marketing Services We Offer</h2>
            <div className="space-y-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="bg-primary/10 p-4 rounded-full">
                          <FileText className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{industry.icon}</div>
                      <CardTitle className="text-xl">{industry.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Content Marketing Results</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-background p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Traffic Increase</div>
              </div>
              <div className="bg-background p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Lead Quality</div>
              </div>
              <div className="bg-background p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">65%</div>
                <div className="text-sm text-muted-foreground">Engagement Rate</div>
              </div>
              <div className="bg-background p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start creating content that converts. Our team will develop a comprehensive content marketing strategy tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Content Analysis
            </Button>
            <Button size="lg" variant="outline">
              View Content Samples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};