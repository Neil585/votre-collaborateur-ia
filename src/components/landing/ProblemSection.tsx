import FadeIn from "./FadeIn";

const ProblemSection = () => {
  return (
    <section className="bg-background-alt py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <p className="font-mono text-sm tracking-[0.25em] text-primary mb-8 uppercase">
            Le problème
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="text-2xl md:text-[36px] lg:text-[42px] text-foreground mb-8 leading-[1.25]">
            L'IA avance. Pas votre entreprise.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="space-y-6 text-ivory/70 text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              Personne en interne n'a le temps de s'en occuper.
              Vos données sont sensibles. Vos concurrents, eux, n'attendent pas.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;
