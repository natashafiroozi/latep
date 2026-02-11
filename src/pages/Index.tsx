import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import latepLogo from "@/assets/latep-logo-lavender.png";
import pinkYellow from "@/assets/images/pink-yellow.jpg";
import orchidGreen from "@/assets/images/orchid-green.jpg";
import blueHydrangea from "@/assets/images/blue-hydrangea.jpg";

const services = [
  { title: "Custom Orders", desc: "Bespoke arrangements crafted with seasonal blooms, tailored to your vision." },
  { title: "Events", desc: "Full-service event florals for weddings, dinners, and celebrations." },
  { title: "Installations", desc: "Large-scale floral installations for spaces that demand presence." },
  { title: "House & Corporate Accounts", desc: "Recurring arrangements for homes and offices." },
  { title: "Editorial Styling", desc: "Floral direction for photoshoots, campaigns, and editorial projects." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
      <img src={latepLogo} alt="LATEP Floral Studio" className="w-64 md:w-80 mb-10" />
      <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed text-muted-foreground tracking-wide">
        Los Angeles–based floral studio specializing in elevated, custom arrangements.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Link
          to="/order"
          className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-light hover:opacity-90 transition-opacity"
        >
          Start Your Order
        </Link>
        <Link
          to="/event-inquiry"
          className="px-8 py-3 border border-border text-foreground text-sm tracking-[0.15em] uppercase font-light hover:bg-muted transition-colors"
        >
          Plan an Event
        </Link>
      </div>
    </section>

    {/* Featured Image */}
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
      <div className="grid md:grid-cols-3 gap-4">
        <img src={pinkYellow} alt="Pink and yellow arrangement" className="w-full h-80 object-cover" />
        <img src={orchidGreen} alt="Orchid and green arrangement" className="w-full h-80 object-cover" />
        <img src={blueHydrangea} alt="Blue hydrangea arrangement" className="w-full h-80 object-cover" />
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
