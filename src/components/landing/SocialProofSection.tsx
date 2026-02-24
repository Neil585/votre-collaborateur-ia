import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const BOOKING_URL = "https://calendly.com/ailiberty/30min";

const SocialProofSection = () => {
  return (
    <section className="bg-background-alt py-24 md:py-32 relative overflow-hidden">
      {/* Subtle glow behind stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <p className="font-mono text-sm tracking-[0.25em] text-primary mb-12 uppercase text-center">
            Ce que ça change, concrètement
          </p>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          <FadeIn delay={0.1}>
            <div className="text-center">
              <p className="font-mono text-4xl md:text-[56px] lg:text-[68px] text-primary leading-none mb-3">
                -<CountUp end={14} />h
              </p>
              <p className="text-ivory/60 text-sm">/ semaine récupérées<br />en moyenne</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center">
              <p className="font-mono text-4xl md:text-[56px] lg:text-[68px] text-primary leading-none mb-3">
                ×<CountUp end={3} />
              </p>
              <p className="text-ivory/60 text-sm">vitesse de traitement<br />des tâches répétitives</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center">
              <p className="font-mono text-4xl md:text-[56px] lg:text-[68px] text-primary leading-none mb-3">
                &lt;<CountUp end={30} /> j
              </p>
              <p className="text-ivory/60 text-sm">avant les premiers résultats<br />par vos équipes</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
