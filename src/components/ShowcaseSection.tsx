
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ShowcaseSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Schools', 'Corporate', 'Security', 'Hotels', 'Factories'];

  const showcaseItems = [
    {
      id: 1,
      category: 'Schools',
      title: 'School Uniform Collection',
      description: 'Complete uniform set with logo embroidery',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      category: 'Corporate',
      title: 'Corporate Polo Shirts',
      description: 'Professional polo shirts with company branding',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      category: 'Security',
      title: 'Security Guard Uniforms',
      description: 'Durable uniforms with reflective strips and badges',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      category: 'Hotels',
      title: 'Hotel Staff Uniforms',
      description: 'Elegant hospitality uniforms with custom embroidery',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      category: 'Factories',
      title: 'Industrial Workwear',
      description: 'Heavy-duty workwear with safety features',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      category: 'Corporate',
      title: 'Executive Shirts',
      description: 'Premium shirts for management and executives',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeFilter);

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Work Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of custom uniforms and workwear solutions across different industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`${
                activeFilter === filter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              } transition-all duration-300`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover-lift overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Custom Uniforms?</h3>
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied businesses who trust us with their uniform needs
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
