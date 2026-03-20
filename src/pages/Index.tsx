import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Leaf, Bug, Hammer, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import factory from "@/assets/factory.jpg";
import mdfBoard from "@/assets/mdf-board.jpg";
import hdhmrBoard from "@/assets/hdhmr-board.jpg";
import particleBoard from "@/assets/particle-board.jpg";
import frameguardBoard from "@/assets/frameguard-board.jpg";

const heroSlides = [
  { image: hero1, title: "Premium Wood Panels for Modern Spaces", subtitle: "Engineered for strength, designed for beauty" },
  { image: hero2, title: "Transform Your Interiors with Quality", subtitle: "Trusted by architects and designers worldwide" },
];

const products = [
  { name: "MDF Board", image: mdfBoard, slug: "mdf-board", desc: "Medium Density Fibreboard for smooth finishes" },
  { name: "HDHMR Board", image: hdhmrBoard, slug: "hdhmr-board", desc: "High Density High Moisture Resistant boards" },
  { name: "Particle Board", image: particleBoard, slug: "particle-board", desc: "Cost-effective solution for furniture" },
  { name: "Frame Guard Board", image: frameguardBoard, slug: "frame-guard-board", desc: "Protective boards for door frames" },
];

const features = [
  { icon: Shield, title: "Superior Quality", desc: "Manufactured with precision using world-class technology" },
  { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable sourcing and green manufacturing practices" },
  { icon: Bug, title: "Termite Resistant", desc: "Advanced treatment ensures complete termite protection" },
  { icon: Hammer, title: "Durability", desc: "Built to last with exceptional structural integrity" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Interior Designer", quote: "WoodCraft boards have become our go-to for premium projects. The consistency and quality are unmatched." },
  { name: "Priya Sharma", role: "Architect", quote: "The HDHMR boards offer incredible moisture resistance. Perfect for kitchen and bathroom cabinetry." },
  { name: "Amit Patel", role: "Furniture Manufacturer", quote: "We've been sourcing from WoodCraft for 5 years. Reliable quality, timely delivery every time." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground max-w-3xl leading-tight animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-xl animate-fade-in">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-accent transition-colors animate-fade-in"
            >
              Explore Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={factory} alt="Manufacturing facility" className="rounded-lg shadow-lg w-full h-80 object-cover" />
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Crafting Excellence Since 2005
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With nearly two decades of expertise in engineered wood manufacturing, we have established ourselves as a trusted name
                in the industry. Our state-of-the-art facilities and commitment to quality ensure every panel meets the highest standards.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-2.5 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Product Range</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
                  <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <f.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">What Our Clients Say</h2>
          <div className="relative">
            <Quote size={40} className="text-primary/20 mx-auto mb-4" />
            <p className="text-lg text-foreground italic leading-relaxed mb-6">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <p className="font-heading font-semibold">{testimonials[currentTestimonial].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</p>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((t) => (t - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setCurrentTestimonial((t) => (t + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
