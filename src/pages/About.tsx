import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/images/about-hero-arrangement.jpg";
import creamOrchids from "@/assets/images/cream-orchids.jpg";
import pinkYellow from "@/assets/images/pink-yellow.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="px-6 md:px-12 max-w-7xl mx-auto pt-16 md:pt-24 mb-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-light mb-8 tracking-wide">
            About LATEP
          </h1>
          <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
            LATEP was founded by Natasha Firoozi with a simple belief: flowers should feel personal. 
            Each arrangement is designed with intention — combining classic floristry with a contemporary eye 
            to create something that feels both timeless and entirely of the moment.
          </p>
          <p className="text-base font-light leading-relaxed text-muted-foreground">
            Based in Los Angeles, the studio works with seasonal blooms sourced from trusted growers, 
            ensuring every piece is as fresh and unique as the occasion it's created for.
          </p>
        </div>
        <img
          src={aboutHero}
          alt="Burgundy and blush floral arrangement with trailing greenery by LATEP"
          className="w-full h-[300px] md:h-[500px] object-contain"
        />
      </div>
    </section>

    {/* Philosophy */}
    <section className="bg-primary/15 py-24 px-6 md:px-12 mb-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-display font-light mb-10 tracking-wide">The Approach</h2>
        <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
          At LATEP, every arrangement begins with a conversation. Whether it's a single bouquet for a 
          loved one or a full event installation, the process is collaborative and thoughtful. 
          Natasha draws on her deep knowledge of botanicals and design to craft pieces that tell a story.
        </p>
        <p className="text-base font-light leading-relaxed text-muted-foreground">
          The studio's philosophy centers on trust — trust in the beauty of seasonal flowers, trust in 
          the creative process, and trust between the studio and its clients. No two arrangements are 
          ever the same, because no two moments are ever the same.
        </p>
      </div>
    </section>

    {/* Gallery strip */}
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
      <div className="grid md:grid-cols-2 gap-4">
        <img src={creamOrchids} alt="Cream orchid and hydrangea arrangement" className="w-full h-96 object-cover" />
        <img src={pinkYellow} alt="Vibrant pink and yellow arrangement" className="w-full h-96 object-cover" />
      </div>
    </section>

    {/* CTA */}
    <section className="text-center py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-display font-light mb-6">Ready to create something beautiful?</h2>
      <Link
        to="/order"
        className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-light hover:opacity-90 transition-opacity"
      >
        Start Your Order
      </Link>
    </section>
  </Layout>
);

export default About;
