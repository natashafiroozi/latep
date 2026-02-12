import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import pinkYellow from "@/assets/images/pink-yellow.jpg";
import orchidGreen from "@/assets/images/orchid-green.jpg";
import blueHydrangea from "@/assets/images/blue-hydrangea.jpg";
import creamOrchids from "@/assets/images/cream-orchids.jpg";
import peachRoses from "@/assets/images/peach-roses.jpeg";
import trailingGreen from "@/assets/images/trailing-green.jpg";
import eventInstallations from "@/assets/images/event-installations.jpg";
import eventTablescapeGarden from "@/assets/images/event-tablescape-garden.jpg";

const services = [
  { title: "Custom Orders", desc: "Bespoke arrangements crafted with seasonal blooms, tailored to your vision.", image: peachRoses },
  { title: "Events", desc: "Full-service event florals for weddings, dinners, and celebrations.", image: eventTablescapeGarden },
  { title: "Installations", desc: "Large-scale floral installations for spaces that demand presence.", image: eventInstallations },
  { title: "House & Corporate Accounts", desc: "Recurring arrangements for homes and offices.", image: trailingGreen },
  { title: "Editorial Styling", desc: "Floral direction for photoshoots, campaigns, and editorial projects.", image: pinkYellow },
];

const Index = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
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
    <motion.section 
      className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <img src={pinkYellow} alt="Pink and yellow arrangement" className="w-full h-[16rem] md:h-[28rem] object-cover floral-soft-edge" />
        <img src={orchidGreen} alt="Orchid and green arrangement" className="w-full h-[16rem] md:h-[28rem] object-cover floral-soft-edge" />
        <img src={blueHydrangea} alt="Blue hydrangea arrangement" className="w-full h-[16rem] md:h-[28rem] object-cover floral-soft-edge" />
      </div>
    </motion.section>

    {/* Services — Interactive Hover Reveals */}
    <motion.section 
      className="px-6 md:px-12 max-w-6xl mx-auto mb-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl md:text-5xl font-display font-light text-center mb-20 tracking-wide">
        Our Services
      </h2>
      <div className="relative">
        {/* Hover image reveal */}
        <div
          className="hidden md:block fixed top-1/2 right-[8%] -translate-y-1/2 w-[320px] h-[420px] overflow-hidden pointer-events-none z-10 transition-opacity duration-500"
          style={{ opacity: hoveredService !== null ? 1 : 0 }}
        >
          {services.map((s, i) => (
            <img
              key={s.title}
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 floral-soft-edge"
              style={{ opacity: hoveredService === i ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Service list */}
        <div className="md:max-w-[55%] space-y-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group border-t border-border py-8 md:py-10 cursor-default transition-all duration-300"
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <h3 className="text-xl md:text-2xl font-display font-normal mb-3 transition-colors duration-300 group-hover:text-primary">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-20 md:group-hover:opacity-100 overflow-hidden">
                {s.desc}
              </p>
              {/* Mobile-only image */}
              <img
                src={s.image}
                alt={s.title}
                className="md:hidden w-full h-auto object-contain mt-4 floral-soft-edge"
              />
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </motion.section>

    {/* Brand Statement */}
    <motion.section 
      className="bg-primary/20 py-24 px-6 md:px-12 mb-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-2xl md:text-3xl font-display font-light italic leading-relaxed text-foreground">
          "Every arrangement is an exercise in seasonality, texture, and feeling — 
          no two are ever the same."
        </blockquote>
        <p className="mt-8 text-sm text-muted-foreground tracking-[0.15em] uppercase font-light">
          — Natasha Firoozi, Founder
        </p>
      </div>
    </motion.section>
  </Layout>
  );
};

export default Index;
