import FadeIn from "./FadeIn";

const ProblemSection = () => {
  return (
    <section className="bg-background-alt py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
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

        {/* Abstract illustration - flow lines */}
        <FadeIn delay={0.4}>
          <div className="relative h-80 md:h-[400px] flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-30" fill="none">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <path
                  key={i}
                  d={`M 0 ${120 + i * 30} Q 100 ${100 + i * 25 + Math.sin(i) * 20} 200 ${130 + i * 28} T 400 ${150 + i * 20}`}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1.5"
                  strokeDasharray={i % 2 === 0 ? "8 4" : "none"}
                  opacity={0.4 + i * 0.08}
                />
              ))}
              {/* Blockage in the middle */}
              <circle cx="200" cy="200" r="40" fill="hsl(var(--muted))" opacity="0.5" />
              <line x1="175" y1="175" x2="225" y2="225" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.6" />
              <line x1="225" y1="175" x2="175" y2="225" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;
