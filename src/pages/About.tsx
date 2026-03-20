import { Award, Target, Eye, Lightbulb, Leaf, Heart, Users, Search, Cog, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import factory from "@/assets/factory.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

const milestones = [
  { year: "2005", title: "Company Founded", desc: "Established with a vision to revolutionize the engineered wood industry in India." },
  { year: "2008", title: "First Factory", desc: "Commissioned our first state-of-the-art manufacturing plant with European machinery." },
  { year: "2012", title: "ISO Certification", desc: "Received ISO 9001:2008 certification for quality management systems." },
  { year: "2016", title: "Product Expansion", desc: "Launched HDHMR and Frame Guard Board product lines to meet growing demand." },
  { year: "2020", title: "Green Certification", desc: "Achieved Green Building certification for sustainable manufacturing practices." },
  { year: "2024", title: "Pan-India Presence", desc: "Expanded distribution to 500+ dealers across all major cities in India." },
];

const certifications = [
  { title: "ISO 9001:2015", desc: "Quality Management" },
  { title: "ISI Certified", desc: "Indian Standards" },
  { title: "Green Building", desc: "Sustainable Manufacturing" },
  { title: "FSC Certified", desc: "Responsible Forestry" },
];

const processSteps = [
  { icon: Search, title: "Raw Material Selection", desc: "We source only the finest wood fibres from sustainably managed forests, ensuring every raw material meets our strict quality benchmarks." },
  { icon: Cog, title: "Precision Engineering", desc: "Using state-of-the-art European machinery, our boards are pressed under exact temperature and pressure conditions for uniform density." },
  { icon: CheckCircle, title: "Multi-Stage Quality Check", desc: "Every board passes through rigorous testing — density, moisture, strength and surface quality — before it leaves our facility." },
];

const coreValues = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously pushing boundaries with cutting-edge manufacturing technology and R&D." },
  { icon: Leaf, title: "Sustainability", desc: "Committed to responsible sourcing, green manufacturing, and minimal environmental footprint." },
  { icon: Heart, title: "Integrity", desc: "Transparent business practices and honest quality standards that our partners trust." },
  { icon: Users, title: "Customer Centricity", desc: "Every product decision is driven by the needs of architects, designers, and end users." },
];

const About = () => (
  <Layout>
    <section className="relative h-48 md:h-64 bg-primary flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">About Us</h1>
        <p className="text-primary-foreground/80 mt-2">Our journey of crafting excellence</p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={factory} alt="Our facility" className="rounded-lg shadow-lg h-80 w-full object-cover" />
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Eye size={24} className="text-primary" />
                <h2 className="text-2xl font-heading font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted name in engineered wood solutions, setting global benchmarks in quality, innovation, and sustainability.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Target size={24} className="text-primary" />
                <h2 className="text-2xl font-heading font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium quality wood panels that empower architects, designers, and homeowners to create beautiful, lasting spaces while championing environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Quality Process */}
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">The Quality Pillar</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">Our meticulous three-step process ensures every board meets the highest standards</p>
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
              )}
              <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center relative z-10">
                <step.icon size={36} className="text-primary" />
                <span className="absolute -top-1 -right-1 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, i) => (
            <div key={i} className="group bg-card border border-border rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/30">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <v.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership Vision */}
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
          <div className="md:col-span-2">
            <img src={ceoPortrait} alt="Founder & CEO" className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]" />
          </div>
          <div className="md:col-span-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Founder's Message</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Building India's Future, One Board at a Time</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "When I started this company in 2005, I had one simple belief — Indian manufacturers can match and surpass global quality standards. 
              Today, our boards are trusted by thousands of architects, designers, and furniture makers across the country."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "Every board that leaves our factory carries our promise of excellence. We don't just manufacture wood panels — 
              we engineer the foundation of beautiful, lasting spaces. Our commitment to innovation and sustainability will 
              continue to drive us forward."
            </p>
            <div>
              <p className="font-heading font-bold text-lg">Vikram Mehta</p>
              <p className="text-muted-foreground text-sm">Founder & Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />
          {milestones.map((m, i) => (
            <div key={i} className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-1.5 z-10" />
              <div className="ml-14 md:ml-0 md:w-1/2 bg-card border border-border rounded-lg p-5 shadow-sm">
                <span className="text-primary font-bold text-sm">{m.year}</span>
                <h3 className="font-heading font-semibold mt-1">{m.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) => (
            <div key={i} className="text-center p-8 border border-border rounded-lg hover:shadow-md transition-shadow bg-card">
              <Award size={40} className="mx-auto text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg">{c.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
