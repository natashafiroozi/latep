import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground font-light tracking-wide">
        © {new Date().getFullYear()} LATEP Floral Studio
      </p>
      <div className="flex items-center gap-8">
        <a
          href="mailto:natasha@latep.co"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide font-light"
        >
          natasha@latep.co
        </a>
        <Link
          to="/order"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide font-light"
        >
          Start an Order
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
