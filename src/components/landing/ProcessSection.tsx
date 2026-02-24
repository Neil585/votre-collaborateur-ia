import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "On vous écoute",
    body: "Un appel de 30 minutes pour comprendre votre entreprise et vos défis.",
  },
  {
    num: "02",
    title: "On configure tout",
    body: "Votre employé IA est paramétré selon vos process et vos priorités.",
  },
  {
    num: "03",
    title: "L'ordinateur vous est livré prêt",
    body: "Vos équipes reçoivent un accompagnement de 2h pour prendre leurs marques.",
  },
  {
    num: "04",
    title: "Vous récoltez",
    body: "Vos équipes soufflent. Vos résultats avancent.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeIn>
          <p className="font-mono text-sm tracking-[0.25em] text-primary mb-12 uppercase text-center">
            De l'appel à l'opérationnel
          </p>
        </FadeIn>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.15}>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <p className="font-mono text-xs text-primary mb-2">ÉTAPE {step.num}</p>
                <h3 className="text-lg md:text-xl text-foreground mb-3 font-normal">
                  {step.title}
                </h3>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
