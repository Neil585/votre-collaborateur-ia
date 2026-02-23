import FadeIn from "./FadeIn";

const BOOKING_URL = "https://calendly.com/ailiberty/30min";

const CTASection = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-[38px] lg:text-[46px] text-foreground mb-8 text-balance leading-[1.25]">
            Votre prochain collaborateur
            <br className="hidden md:block" />
            n'attend qu'un signal.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg md:text-xl text-ivory/70 max-w-xl mx-auto mb-12 leading-relaxed">
            Réservez un entretien de 30 minutes.
            <br className="hidden md:block" />
            On vous explique tout. Vous repartez avec une vision claire.
            <br className="hidden md:block" />
            Aucun engagement. Aucun jargon.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          {/* Calendly inline embed */}
          <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-primary/10">
            <iframe
              src="https://calendly.com/ailiberty/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=111118&text_color=F5F4F2&primary_color=C8A97E"
              width="100%"
              height="700"
              frameBorder="0"
              title="Réserver un entretien découverte"
              className="bg-background-alt"
              loading="lazy"
            />
          </div>
          <p className="font-mono text-xs text-muted-foreground mt-6">
            Places limitées · Entretiens disponibles sous 48h
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
