import FadeIn from "./FadeIn";
import problemVisual from "@/assets/problem-visual.webp";

const ProblemSection = () => {
  return (
    <section className="bg-background-alt py-24 md:py-32 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <FadeIn>
            <p className="font-mono text-sm tracking-[0.25em] text-primary mb-8 uppercase">
              Ce que vous vivez probablement
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="text-2xl md:text-[36px] lg:text-[42px] text-foreground mb-8 leading-[1.25]">
              L'IA existe.
              <br />
              Vous le savez.
              <br />
              Mais personne dans votre équipe n'a le temps de s'en occuper.
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-6 text-ivory/70 text-base md:text-lg leading-relaxed">
              <p>
                Vous avez testé ChatGPT. Des heures perdues sur des tâches qu'un junior
                pourrait faire. Des informations confidentielles qui doivent rester chez vous.
              </p>
              <p>Et pendant ce temps, vos concurrents avancent.</p>
              <p>
                Pas parce qu'ils sont plus intelligents.
                <br />
                Parce qu'ils ont su déléguer au bon moment.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="relative h-80 md:h-[460px] rounded-2xl overflow-hidden">
            <img
              src={problemVisual}
              alt="Enchevêtrement complexe symbolisant le chaos organisationnel"
              className="w-full h-full object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-alt via-transparent to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;
