import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Target, TrendingUp, Users, DollarSign, BarChart3, Zap, Eye, MousePointer } from "lucide-react";

export const PPCServices = () => {
  const ppcBenefits = [
    {
      title: "Instant Visibility & Results",
      description: "Unlike SEO, PPC delivers immediate visibility. Your ads appear right when people are searching, bringing traffic and leads from day one.",
      icon: <Zap className="w-8 h-8 text-primary" />,
      metric: "Immediate"
    },
    {
      title: "Precise Audience Targeting",
      description: "Target users based on keywords, locations, devices, and interests. Reach people actively looking for your products or services.",
      icon: <Target className="w-8 h-8 text-primary" />,
      metric: "100% Targeted"
    },
    {
      title: "Cost-Effective & Scalable",
      description: "Smart budget control with AI-powered bidding. Start small and scale as you grow, paying only for performance.",
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      metric: "ROI Focused"
    },
    {
      title: "Measurable Results",
      description: "Track every click, impression, and conversion with real-time data and analytics for continuous optimization.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      metric: "Data-Driven"
    }
  ];

  const ppcServices = [
    {
      title: "Google Ads Management",
      description: "Professional Google Ads campaigns optimized for search, display, and shopping networks with high-value keywords and compelling ad copy.",
      features: ["Search Campaigns", "Display Ads", "Shopping Ads", "YouTube Ads"],
      icon: <MousePointer className="w-8 h-8 text-primary" />
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Reach your target audience with engaging social media ad campaigns that drive customer engagement and conversions.",
      features: ["News Feed Ads", "Story Ads", "Carousel Ads", "Video Ads"],
      icon: <Eye className="w-8 h-8 text-primary" />
    },
    {
      title: "LinkedIn Advertising",
      description: "B2B focused campaigns targeting decision-makers and professionals in specific industries for qualified lead generation.",
      features: ["Sponsored Content", "InMail Ads", "Text Ads", "Lead Gen Forms"],
      icon: <Users className="w-8 h-8 text-primary" />
    },
    {
      title: "Campaign Optimization",
      description: "Continuous monitoring and optimization of bid strategies, budget allocation, and ad performance for maximum ROI.",
      features: ["Bid Management", "A/B Testing", "Conversion Tracking", "Performance Analysis"],
      icon: <TrendingUp className="w-8 h-8 text-primary" />
    }
  ];

  const managementServices = [
    {
      title: "Campaign Strategy & Setup",
      description: "Custom strategies tailored to your business goals with complete campaign setup across multiple platforms.",
      details: ["Market research and analysis", "Platform selection and setup", "Goal alignment and KPI definition", "Campaign structure optimization"]
    },
    {
      title: "Keyword Research & Targeting",
      description: "Comprehensive keyword research to find high-converting, profitable keywords that drive targeted traffic.",
      details: ["High-intent keyword identification", "Negative keyword management", "Competitor keyword analysis", "Long-tail keyword targeting"]
    },
    {
      title: "Ad Creation & Copywriting",
      description: "Engaging, persuasive ad copy and creative visuals that resonate with your audience and drive conversions.",
      details: ["Conversion-focused ad copy", "A/B testing of creatives", "Visual asset creation", "Landing page alignment"]
    },
    {
      title: "Performance Monitoring & Reporting",
      description: "Real-time campaign monitoring with detailed reporting and actionable insights for continuous improvement.",
      details: ["Daily performance monitoring", "Weekly and monthly reports", "ROI and ROAS tracking", "Optimization recommendations"]
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
              <Target className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                PPC Services
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Maximize your ROI with professionally managed paid advertising campaigns across Google, Facebook, Instagram, and LinkedIn platforms. Get immediate results with data-driven strategies.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Immediate Results</Badge>
              <Badge variant="secondary">Targeted Campaigns</Badge>
              <Badge variant="secondary">AI-Powered Bidding</Badge>
              <Badge variant="secondary">ROI Focused</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of PPC Advertising</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ppcBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {benefit.icon}
                        <CardTitle className="ml-3 text-xl">{benefit.title}</CardTitle>
                      </div>
                      <Badge variant="outline">{benefit.metric}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PPC Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our PPC Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ppcServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <CardTitle className="ml-3 text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
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

      {/* Management Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive PPC Management</h2>
            <div className="space-y-8">
              {managementServices.map((service, index) => (
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
                          <Target className="w-8 h-8 text-primary" />
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

      {/* ROI Comparison */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Expected ROI with Our PPC Management</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-background p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">400%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="bg-background p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="bg-background p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your PPC Campaign?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start driving immediate results with our expert PPC management. Our team will create targeted campaigns that deliver measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Free PPC Audit
            </Button>
            <Button size="lg" variant="outline">
              Talk to PPC Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};