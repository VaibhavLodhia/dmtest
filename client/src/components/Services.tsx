// src/components/Services.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import SEOServiceImg from "@/assets/seo-service.svg?url";
import PPCServiceImg from "@/assets/ppc-service.svg?url";
import SocialMediaServiceImg from "@/assets/social-media-service.svg?url";
import ContentMarketingServiceImg from "@/assets/content-marketing-service.svg?url";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Drive Organic Growth with Advanced SEO Strategies. Improve your visibility through custom strategies designed for both local markets and global audiences. We turn search traffic into high-quality leads with a focus on performance using data-driven techniques.",
    features: [
      "Local SEO",
      "Enterprise SEO",
      "Lead Generation SEO",
      "SEO Audits",
    ],
    imageUrl: SEOServiceImg,
    link: "/services/seo",
  },
  {
    title: "Paid Advertising (PPC)",
    description:
      "Maximize ROI with Precision-Targeted Ad Campaigns. Strategic ad placements reach your ideal customers when it matters most. We ensure your budget delivers measurable growth and real results by continuously refining and optimizing your campaigns.",
    features: [
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Ads",
    ],
    imageUrl: PPCServiceImg,
    link: "/services/ppc",
  },
  {
    title: "Social Media Marketing",
    description:
      "Multi-Channel Digital Strategies for Brand Success. Maintain a consistent brand voice across every digital touchpoint—from social media to email to content. Our personalized marketing approach strengthens customer relationships and drives lasting engagement.",
    features: [
      "Content Strategy",
      "Community Management",
      "Influencer Marketing",
      "Analytics & Reporting",
    ],
    imageUrl: SocialMediaServiceImg,
    link: "/services/social-media",
  },
  {
    title: "Content Marketing",
    description:
      "Create compelling, high-quality content that engages your audience and drives organic traffic. From blogs to videos, we craft content that converts visitors into customers with strategic storytelling and data-driven content optimization.",
    features: [
      "Blog Writing",
      "Video Content",
      "Infographics",
      "Email Marketing",
    ],
    imageUrl: ContentMarketingServiceImg,
    link: "/services/content-marketing",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
            Core Services Overview
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Your Go-To Partner for Bold Branding,{" "}
            <span className="text-primary">Smart Marketing</span>, and Impactful Web Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We craft unforgettable brand identities, design conversion-ready websites, and deliver data-driven marketing strategies to help your business thrive across the USA.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border/40 shadow-lg hover:shadow-2xl bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              
              <div className="p-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                <CardContent className="p-0 space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href={service.link}>
                      <Button variant="outline" className="w-full group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
