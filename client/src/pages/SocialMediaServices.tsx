import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Share2, TrendingUp, Users, Heart, MessageCircle, Camera, Video, BarChart3 } from "lucide-react";

export const SocialMediaServices = () => {
  const platforms = [
    {
      name: "Facebook",
      icon: "📘",
      description: "High-converting Facebook ad campaigns with precise audience targeting and lookalike audiences.",
      features: ["News Feed Ads", "Story Ads", "Carousel Ads", "Video Ads"],
      audience: "2.9B users worldwide"
    },
    {
      name: "Instagram",
      icon: "📸",
      description: "Visual-first campaigns with reels, carousels, and stories that convert scrollers into buyers.",
      features: ["Reels", "Stories", "IGTV", "Shopping Tags"],
      audience: "2B active users"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      description: "B2B focused campaigns targeting decision-makers and professionals for qualified lead generation.",
      features: ["Sponsored Content", "InMail", "Lead Gen Forms", "Event Ads"],
      audience: "900M professionals"
    },
    {
      name: "TikTok",
      icon: "🎵",
      description: "Viral content creation with trends, challenges, and influencer collaborations for Gen Z engagement.",
      features: ["In-Feed Ads", "Branded Effects", "Hashtag Challenges", "Spark Ads"],
      audience: "1B+ users"
    }
  ];

  const benefits = [
    {
      title: "Brand Awareness & Visibility",
      description: "Establish consistent brand presence with on-brand visuals and messaging across all platforms.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      metrics: ["Brand Recognition +85%", "Reach +200%", "Engagement +150%"]
    },
    {
      title: "Lead Generation & Conversions",
      description: "Generate high-quality leads through targeted campaigns and retargeting strategies.",
      icon: <Users className="w-8 h-8 text-primary" />,
      metrics: ["Lead Quality +90%", "Conversion Rate +65%", "Cost Per Lead -40%"]
    },
    {
      title: "Customer Engagement & Loyalty",
      description: "Build community through interactive content, real-time responses, and authentic connections.",
      icon: <Heart className="w-8 h-8 text-primary" />,
      metrics: ["Engagement Rate +120%", "Customer Retention +75%", "Brand Loyalty +95%"]
    }
  ];

  const services = [
    {
      title: "Social Media Strategy & Planning",
      description: "Data-backed strategies aligned with buyer personas and market trends for maximum impact.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      details: ["Competitor analysis", "Content calendar creation", "Platform optimization", "Goal setting & KPIs"]
    },
    {
      title: "Content Creation & Visual Branding",
      description: "Scroll-stopping visuals, branded assets, and storyboards tailored for each platform.",
      icon: <Camera className="w-8 h-8 text-primary" />,
      details: ["Graphic design", "Video production", "Story templates", "Brand consistency"]
    },
    {
      title: "Paid Social Media Advertising",
      description: "Launch and optimize ad campaigns across all major platforms with advanced targeting.",
      icon: <Share2 className="w-8 h-8 text-primary" />,
      details: ["Campaign setup", "Audience targeting", "Budget optimization", "A/B testing"]
    },
    {
      title: "Community Management",
      description: "Engage with your audience through comments, messages, and reviews to build trust.",
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      details: ["Daily engagement", "Review management", "Crisis communication", "Influencer outreach"]
    }
  ];

  const industries = [
    {
      name: "E-commerce & DTC Brands",
      description: "Product launches, seasonal sales, and cart abandonment reduction with visual storytelling.",
      icon: "🛍️"
    },
    {
      name: "SaaS & B2B Tech",
      description: "Demo requests and MQLs through LinkedIn campaigns and long-form content promotion.",
      icon: "💻"
    },
    {
      name: "Health & Wellness",
      description: "Community building and trust through video storytelling and influencer partnerships.",
      icon: "🏥"
    },
    {
      name: "Education & Online Learning",
      description: "Course enrollments through TikTok challenges, YouTube content, and student testimonials.",
      icon: "🎓"
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
              <Share2 className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Social Media Marketing
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Build your brand presence with strategic social media campaigns tailored to your audience across multiple platforms for maximum engagement and conversions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Multi-Platform</Badge>
              <Badge variant="secondary">Audience Targeting</Badge>
              <Badge variant="secondary">Content Strategy</Badge>
              <Badge variant="secondary">Community Building</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* What is Social Media Marketing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is Social Media Marketing?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Social media marketing is the strategic use of social media platforms like Instagram, Facebook, LinkedIn, TikTok, and Twitter to connect with your audience, increase brand awareness, and drive customer acquisition.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Reach Ideal Audience Daily</h3>
                      <p className="text-sm text-muted-foreground">Connect with billions of users across platforms where they spend their time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Build Brand Voice & Authority</h3>
                      <p className="text-sm text-muted-foreground">Establish consistent messaging and thought leadership in your industry</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Drive Sales with Social Ads</h3>
                      <p className="text-sm text-muted-foreground">Convert social engagement into measurable business results</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg max-w-sm mx-auto">
                      {/* AI Avatar */}
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center relative overflow-hidden">
                            {/* Avatar Face */}
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            </div>
                            {/* Speaking animation */}
                            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                          </div>
                          {/* Status indicator */}
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-sm">AI Marketing Assistant</h4>
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">Reading post aloud...</p>
                        </div>
                      </div>
                      
                      {/* Post Content */}
                      <div className="text-sm text-left space-y-2">
                        <p className="text-foreground">
                          🚀 Ready to boost your brand's social media presence? Our AI-powered content strategies deliver:
                        </p>
                        <div className="text-muted-foreground space-y-1">
                          <p className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            300% increase in engagement
                          </p>
                          <p className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                            24/7 automated responses
                          </p>
                          <p className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                            Consistent brand voice
                          </p>
                          <p className="flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                            Multi-platform optimization
                          </p>
                        </div>
                        <p className="text-primary font-medium">#SocialMediaMarketing #AIContent #DigitalGrowth</p>
                      </div>
                      
                      {/* Interaction buttons */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            234
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            45
                          </span>
                          <span className="flex items-center">
                            <Share2 className="w-4 h-4 mr-1" />
                            12
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">AI Avatar Content Creation</h3>
                  <p className="text-muted-foreground text-sm">
                    Our AI avatars create engaging posts, respond to comments, and maintain consistent brand voice across all platforms 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Social Media Marketing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center mb-4">{benefit.description}</p>
                    <div className="space-y-2">
                      {benefit.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm bg-primary/10 p-2 rounded-lg">
                          {metric}
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

      {/* Platforms We Specialize In */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Platforms We Specialize In</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{platform.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{platform.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{platform.audience}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{platform.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, idx) => (
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Social Media Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
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
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {detail}
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

      {/* Industries We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4 mt-1">{industry.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                        <p className="text-muted-foreground">{industry.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Social Media?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your social media presence with our comprehensive marketing strategies. From content creation to community management, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Social Media Strategy
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};