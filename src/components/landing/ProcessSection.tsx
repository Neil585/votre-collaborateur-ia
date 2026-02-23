import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "On vous écoute",
    body: "Un appel de 30 minutes pour comprendre votre entreprise, vos défis, vos équipes. Aucun jargon technique.",
  },
  {
    num: "02",
    title: "On configure tout",
    body: "Votre employé IA est paramétré selon vos process, votre ton, vos priorités.",
  },
  {
    num: "03",
    title: "On installe chez vous",
    body: "Une intervention courte, discrète. Vos équipes reçoivent un accompagnement de 2h pour prendre leurs marques.",
  },
  {
    num: "04",
    title: "Vous récoltez",
    body: "Votre entreprise tourne différemment. Vos équipes soufflent. Vos résultats avancent.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-sm tracking-[0.25em] text-primary mb-12 uppercase text-center">
            De l'appel à l'opérationnel
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8 relative">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="relative text-center md:text-left">
                  {/* Dot on timeline (mobile) */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                    <div className="h-px flex-1 bg-primary/20" />
                  </div>
                  {/* Dot on timeline (desktop) */}
                  <div className="hidden md:flex justify-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="font-mono text-xs text-primary mb-2">ÉTAPE {step.num}</p>
                  <h3 className="text-lg md:text-xl text-foreground mb-3 font-normal">
                    "{step.title}"
                  </h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
