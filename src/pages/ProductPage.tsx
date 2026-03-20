import { useParams, Link } from "react-router-dom";
import { ArrowRight, Droplets, Layers, Bug, Leaf, Maximize, Paintbrush, Download } from "lucide-react";
import Layout from "@/components/Layout";
import mdfBoard from "@/assets/mdf-board.jpg";
import hdhmrBoard from "@/assets/hdhmr-board.jpg";
import particleBoard from "@/assets/particle-board.jpg";
import frameguardBoard from "@/assets/frameguard-board.jpg";
import appKitchen from "@/assets/app-kitchen.jpg";
import appWardrobe from "@/assets/app-wardrobe.jpg";
import appOffice from "@/assets/app-office.jpg";
import appWall from "@/assets/app-wall.jpg";

const productData: Record<string, {
  name: string; image: string; tagline: string; intro: string;
  features: { icon: any; title: string }[];
  specs: { property: string; unit: string; value: string }[];
}> = {
  "mdf-board": {
    name: "MDF Board", image: mdfBoard, tagline: "Engineered for Smooth Perfection",
    intro: "Medium Density Fibreboard (MDF) is crafted from wood fibres bonded under high pressure and temperature. It offers an exceptionally smooth surface ideal for painting, laminating, and veneering. Perfect for furniture, cabinetry, and decorative applications.",
    features: [
      { icon: Maximize, title: "Smooth Surface Finish" }, { icon: Layers, title: "High Density Core" },
      { icon: Bug, title: "Termite & Borer Proof" }, { icon: Leaf, title: "Eco-Friendly" },
      { icon: Paintbrush, title: "Easy to Paint & Laminate" }, { icon: Droplets, title: "Moisture Resistant" },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "700 - 850" },
      { property: "Thickness Availability", unit: "mm", value: "2.5 - 35" },
      { property: "Moisture Content", unit: "%", value: "5 - 8" },
      { property: "Modulus of Elasticity", unit: "N/mm²", value: "≥ 2500" },
    ],
  },
  "hdhmr-board": {
    name: "HDHMR Board", image: hdhmrBoard, tagline: "High Density, High Moisture Resistance",
    intro: "HDHMR (High Density High Moisture Resistant) boards represent the pinnacle of engineered wood technology. With superior density and exceptional moisture resistance, they are the ideal choice for kitchen cabinets, bathroom vanities, and areas exposed to humidity.",
    features: [
      { icon: Droplets, title: "High Moisture Resistant" }, { icon: Layers, title: "Ultra High Density" },
      { icon: Bug, title: "Termite & Borer Proof" }, { icon: Leaf, title: "Eco-Friendly" },
      { icon: Maximize, title: "Smooth Surface Finish" }, { icon: Paintbrush, title: "Easy Machinability" },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "850 - 950" },
      { property: "Thickness Availability", unit: "mm", value: "6 - 25" },
      { property: "Moisture Content", unit: "%", value: "4 - 7" },
      { property: "Modulus of Elasticity", unit: "N/mm²", value: "≥ 3200" },
    ],
  },
  "particle-board": {
    name: "Particle Board", image: particleBoard, tagline: "Cost-Effective, Reliable Performance",
    intro: "Particle Board is manufactured from wood chips and resin, pressed under high temperature. It offers an economical yet reliable solution for furniture, shelving, and interior fit-outs. Available in a range of thicknesses and densities.",
    features: [
      { icon: Layers, title: "Uniform Structure" }, { icon: Maximize, title: "Consistent Thickness" },
      { icon: Bug, title: "Termite Treated" }, { icon: Leaf, title: "Eco-Friendly" },
      { icon: Paintbrush, title: "Laminate Ready" }, { icon: Droplets, title: "Standard Moisture Resistance" },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "600 - 750" },
      { property: "Thickness Availability", unit: "mm", value: "8 - 25" },
      { property: "Moisture Content", unit: "%", value: "6 - 10" },
      { property: "Modulus of Elasticity", unit: "N/mm²", value: "≥ 1800" },
    ],
  },
  "frame-guard-board": {
    name: "Frame Guard Board", image: frameguardBoard, tagline: "Ultimate Protection for Door Frames",
    intro: "Frame Guard Board is specifically engineered for door frame applications. With enhanced density and specially treated for termite and moisture resistance, it ensures your door frames remain structurally sound for decades.",
    features: [
      { icon: Layers, title: "High Density Core" }, { icon: Bug, title: "Termite & Borer Proof" },
      { icon: Droplets, title: "Moisture Resistant" }, { icon: Leaf, title: "Eco-Friendly" },
      { icon: Maximize, title: "Dimensional Stability" }, { icon: Paintbrush, title: "Smooth Finish" },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "750 - 900" },
      { property: "Thickness Availability", unit: "mm", value: "25 - 35" },
      { property: "Moisture Content", unit: "%", value: "5 - 8" },
      { property: "Modulus of Elasticity", unit: "N/mm²", value: "≥ 2800" },
    ],
  },
};

const applications = [
  { name: "Kitchen Cabinets", image: appKitchen },
  { name: "Wardrobes", image: appWardrobe },
  { name: "Office Furniture", image: appOffice },
  { name: "Wall Paneling", image: appWall },
];

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">Browse all products</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">{product.name}</h1>
            <p className="text-primary-foreground/80 text-lg mt-2">{product.tagline}</p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={product.image} alt={product.name} className="rounded-lg shadow-lg w-full h-80 object-cover" />
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Introduction to {product.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.intro}</p>
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded font-semibold hover:bg-accent transition-colors">
                <Download size={16} /> Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Core Advantages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold mt-2">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Where to Use {product.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="group rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-card text-center">
                  <h3 className="font-heading font-semibold">{app.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Technical Data</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Property</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Unit</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Value/Range</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-section-alt"}>
                    <td className="px-6 py-3 text-sm font-medium">{s.property}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{s.unit}</td>
                    <td className="px-6 py-3 text-sm">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
