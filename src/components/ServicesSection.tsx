
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Scissors, Palette, Users, ShieldCheck, Building } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Shirt,
      title: 'T-Shirt Printing & Embroidery',
      description: 'High-quality printing and embroidery services with advanced techniques for vibrant, long-lasting designs.',
      features: ['Screen Printing', 'Digital Printing', 'Embroidery', 'Heat Transfer']
    },
    {
      icon: Scissors,
      title: 'Custom Uniform Design',
      description: 'Tailored uniform solutions designed to match your brand identity and industry requirements.',
      features: ['Brand Integration', 'Industry-Specific Design', 'Size Range', 'Comfort First']
    },
    {
      icon: Palette,
      title: 'Logo Placement & Fabric Selection',
      description: 'Expert logo placement and premium fabric selection to ensure professional appearance and durability.',
      features: ['Logo Design', 'Color Matching', 'Premium Fabrics', 'Quality Assurance']
    }
  ];

  const industries = [
    { icon: Users, name: 'Schools & Colleges', description: 'Professional uniforms for educational institutions' },
    { icon: Building, name: 'Corporate', description: 'Branded workwear for corporate environments' },
    { icon: ShieldCheck, name: 'Security Agencies', description: 'Durable uniforms for security personnel' },
    { icon: Building, name: 'Hotels & Hospitality', description: 'Elegant uniforms for hospitality industry' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive uniform and workwear solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`hover-lift cursor-pointer transition-all duration-300 ${
                activeService === index ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-12">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-gray-600 rounded-full mx-auto mb-4">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{industry.name}</h4>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Simple Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Share your requirements and design ideas' },
              { step: '02', title: 'Design', description: 'We create mockups and samples for approval' },
              { step: '03', title: 'Production', description: 'High-quality manufacturing with attention to detail' },
              { step: '04', title: 'Delivery', description: 'Fast and reliable delivery to your location' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
