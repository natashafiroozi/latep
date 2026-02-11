import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import pinkYellow from "@/assets/images/pink-yellow.jpg";
import orchidGreen from "@/assets/images/orchid-green.jpg";
import blueHydrangea from "@/assets/images/blue-hydrangea.jpg";
import creamOrchids from "@/assets/images/cream-orchids.jpg";

const services = [
  { title: "Custom Orders", desc: "Bespoke arrangements crafted with seasonal blooms, tailored to your vision." },
  { title: "Events", desc: "Full-service event florals for weddings, dinners, and celebrations." },
  { title: "Installations", desc: "Large-scale floral installations for spaces that demand presence." },
  { title: "House & Corporate Accounts", desc: "Recurring arrangements for homes and offices." },
  { title: "Editorial Styling", desc: "Floral direction for photoshoots, campaigns, and editorial projects." },
];

const Index = () => (
  <Layout>
    {/* Hero — Editorial Split */}
    <section className="grid md:grid-cols-2 min-h-[100vh] -mt-20">
      {/* Left — Full-bleed image */}
      <div className="relative min-h-[50vh] md:min-h-full">
        <img
          src={creamOrchids}
          alt="LATEP floral arrangement"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right — Brand & navigation */}
      <div className="flex flex-col items-center justify-center px-8 md:px-16 py-20 md:py-0 relative">
        <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-light tracking-[0.08em] leading-[0.9] text-foreground">
          LATEP
        </h1>
        <p className="mt-8 max-w-sm text-center text-sm md:text-base font-light leading-relaxed text-muted-foreground tracking-wide">
          Los Angeles–based floral studio specializing in elevated, custom arrangements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            to="/order"
            className="px-8 py-3 border border-foreground text-foreground text-xs tracking-[0.2em] uppercase font-light hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Order Flowers
          </Link>
          <Link
            to="/event-inquiry"
            className="px-8 py-3 text-muted-foreground text-xs tracking-[0.2em] uppercase font-light hover:text-foreground transition-colors duration-300"
          >
            Plan an Event
          </Link>
        </div>
      </div>
    </section>

    {/* Image Triptych */}
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-24">
      <div className="grid md:grid-cols-3 gap-1">
        <img src={pinkYellow} alt="Pink and yellow arrangement" className="w-full h-[28rem] object-cover" />
        <img src={orchidGreen} alt="Orchid and green arrangement" className="w-full h-[28rem] object-cover" />
        <img src={blueHydrangea} alt="Blue hydrangea arrangement" className="w-full h-[28rem] object-cover" />
      </div>
    </section>

    {/* Services */}
    <section className="px-6 md:px-12 max-w-5xl mx-auto mb-32">
      <h2 className="text-3xl md:text-4xl font-display font-light text-center mb-16 tracking-wide">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {services.map((s) => (
          <div key={s.title} className="border-t border-border pt-6">
            <h3 className="text-lg font-display font-normal mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Brand Statement */}
    <section className="bg-primary/20 py-24 px-6 md:px-12 mb-0">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-2xl md:text-3xl font-display font-light italic leading-relaxed text-foreground">
          "Every arrangement is an exercise in seasonality, texture, and feeling — 
          no two are ever the same."
        </blockquote>
        <p className="mt-8 text-sm text-muted-foreground tracking-[0.15em] uppercase font-light">
          — Natasha Firoozi, Founder
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
