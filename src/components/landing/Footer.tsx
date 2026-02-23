const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/15 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm tracking-[0.2em] text-foreground mb-1">AI-LIBERTY</p>
          <p className="text-sm text-ivory/40">L'IA qui travaille pour vous. Pas l'inverse.</p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span className="hover:text-foreground transition-colors cursor-pointer">Mentions légales</span>
          <span className="hover:text-foreground transition-colors cursor-pointer">Politique de confidentialité</span>
          <span className="hover:text-foreground transition-colors cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
