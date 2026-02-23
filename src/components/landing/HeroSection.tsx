import heroBg from "@/assets/hero-bg.webp";
import FadeIn from "./FadeIn";

const BOOKING_URL = "https://calendly.com/ailiberty/30min";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
        <FadeIn delay={0.1}>
          <p className="font-mono text-sm tracking-[0.25em] text-primary mb-10 uppercase">
            Pour les dirigeants qui n'ont plus de temps à perdre
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h1 className="text-[40px] md:text-[72px] leading-[1.1] text-foreground mb-8 text-balance">
            Votre entreprise vient
            <br className="hidden md:block" /> de recruter son meilleur
            <br className="hidden md:block" /> collaborateur.
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-lg md:text-xl text-ivory/70 max-w-[560px] mx-auto mb-12 leading-relaxed">
            Il ne prend pas de congés. Il ne rate pas de deadlines.
            <br className="hidden md:block" />
            Il connaît votre entreprise sur le bout des doigts.
            <br className="hidden md:block" />
            Et il commence à travailler dans moins de 30 jours.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex flex-col items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-primary-foreground h-14 px-10 rounded-full inline-flex items-center text-base font-medium transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              → Réserver mon créneau de découverte
            </a>
            <p className="font-mono text-xs text-muted-foreground">
              Entretien de 30 min · Gratuit · Sans engagement
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.9}>
          <div className="flex flex-wrap justify-center gap-4 mt-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Données 100% locales
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-subtle text-ivory text-sm font-mono">
              Opérationnel en &lt; 30 jours
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-subtle text-ivory text-sm font-mono">
              Rentable dès le 1er mois
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
