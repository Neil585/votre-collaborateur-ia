import FadeIn from "./FadeIn";

const cards = [
  {
    title: "Il prend des initiatives",
    body: "Il n'attend pas qu'on lui demande. Il anticipe, organise, produit, relance. Chaque matin, votre équipe a déjà de l'avance.",
  },
  {
    title: "Il protège vos secrets",
    body: "Aucune donnée ne quitte vos murs. Jamais. Vos clients, vos contrats, vos stratégies restent exclusivement les vôtres.",
  },
  {
    title: "Il est là à 3h du matin",
    body: "Une urgence client un dimanche ? Un devis à préparer avant 8h ? Il travaille quand vous dormez.",
  },
  {
    title: "Il s'installe. Vous continuez.",
    body: "Pas de formation. Pas de recrutement. Pas de période d'essai. Nous nous occupons de tout. Vous récoltez dès le premier mois.",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-[38px] lg:text-[46px] text-foreground text-center mb-12 md:mb-16 text-balance leading-[1.25]">
            Rencontrez votre nouvel employé.
            <br className="hidden md:block" />
            Celui qui change tout.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="bg-subtle border border-primary/10 rounded-2xl p-8 md:p-10 h-full transition-all hover:border-primary/25">
                <h3 className="text-xl md:text-2xl text-foreground mb-4 font-normal">
                  {card.title}
                </h3>
                <p className="text-ivory/60 text-base leading-relaxed">
                  {card.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
