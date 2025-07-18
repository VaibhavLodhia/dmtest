import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Search, TrendingUp, Users, Target, BarChart3, Globe, Smartphone } from "lucide-react";

export const SEOServices = () => {
  const seoTypes = [
    {
      title: "Local SEO",
      description: "Help businesses get discovered by potential customers in their local area with location-specific optimization.",
      icon: <Target className="w-8 h-8 text-primary" />,
      features: ["Google My Business", "Local Citations", "Location-based Keywords", "Review Management"]
    },
    {
      title: "Enterprise SEO",
      description: "Large-scale SEO strategies for maximum visibility nationally and internationally.",
      icon: <Globe className="w-8 h-8 text-primary" />,
      features: ["Technical SEO", "Site Architecture", "International SEO", "Brand Authority"]
    },
    {
      title: "Lead Generation SEO",
      description: "Focus on generating high-quality leads through targeted keyword strategies and conversion optimization.",
      icon: <Users className="w-8 h-8 text-primary" />,
      features: ["Conversion Optimization", "Landing Page SEO", "Lead Magnets", "CRO Integration"]
    },
    {
      title: "SEO Audits",
      description: "Comprehensive analysis of your website's SEO performance with actionable recommendations.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      features: ["Technical Analysis", "Competitor Research", "Performance Metrics", "Action Plans"]
    }
  ];

  const coreServices = [
    {
      title: "Keyword Research",
      description: "In-depth analysis of high-traffic, relevant keywords to reach your target audience.",
      details: ["Search volume analysis", "Competitor keyword research", "Long-tail keyword targeting", "Intent-based optimization"]
    },
    {
      title: "On-Page SEO",
      description: "Optimize individual pages for better search rankings and user experience.",
      details: ["Title tag optimization", "Meta descriptions", "Header structure", "Internal linking"]
    },
    {
      title: "Technical SEO",
      description: "Ensure your website's technical foundation supports search engine crawling and ranking.",
      details: ["Site speed optimization", "Mobile responsiveness", "Schema markup", "XML sitemaps"]
    },
    {
      title: "Content Optimization",
      description: "Create and optimize high-quality content that drives engagement and rankings.",
      details: ["SEO-friendly content", "Content strategy", "Blog optimization", "User intent alignment"]
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
              <Search className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                SEO Services
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Boost your organic visibility with our AI-powered SEO services. We help businesses grow their online presence through targeted keyword strategies and technical optimization.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Organic Traffic Growth</Badge>
              <Badge variant="secondary">Higher Rankings</Badge>
              <Badge variant="secondary">AI-Powered</Badge>
              <Badge variant="secondary">Long-term ROI</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Why SEO is Important */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why SEO is Important for Business Growth</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-primary mr-2" />
                  Benefits of Organic Traffic
                </h3>
                <p className="text-muted-foreground mb-6">
                  Organic traffic leads to high-quality engagement, improving conversions and brand visibility. SEO techniques focus on attracting targeted visitors, driving consistent growth, and enhancing customer relationships.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Long-Term ROI from SEO</h3>
                <p className="text-muted-foreground">
                  Investing in SEO offers long-term benefits, ensuring constant traffic, reducing promotional costs, and enhancing search engine rankings. It provides sustained growth and significant returns on your marketing efforts.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Organic vs Paid Traffic</span>
                    <span className="text-2xl font-bold text-primary">3x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Cost Reduction</span>
                    <span className="text-2xl font-bold text-primary">60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Brand Trust</span>
                    <span className="text-2xl font-bold text-primary">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of SEO Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Types of SEO Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {seoTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {type.icon}
                      <CardTitle className="ml-3 text-xl">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Core SEO Services</h2>
            <div className="space-y-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
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
                          <Search className="w-8 h-8 text-primary" />
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

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your SEO?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive SEO services and watch your organic traffic grow. Our experts will create a customized strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Free SEO Audit
            </Button>
            <Button size="lg" variant="outline">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};