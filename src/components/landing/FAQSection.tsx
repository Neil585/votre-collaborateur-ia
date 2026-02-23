import FadeIn from "./FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce que je dois être calé en technologie ?",
    a: "Non. C'est précisément pour ça que nous existons. Vous n'avez rien à installer, rien à configurer, rien à comprendre techniquement. Nous gérons l'intégralité.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Tout fonctionne en local, dans votre entreprise. Aucune donnée ne transite par un serveur externe. Jamais. C'est l'un des avantages majeurs de notre approche.",
  },
  {
    q: "Et si ça ne correspond pas à mon secteur ?",
    a: "C'est justement le sujet de notre premier appel. Si nous ne sommes pas la bonne solution pour vous, nous vous le dirons franchement, et gratuitement.",
  },
  {
    q: "Combien de temps avant les premiers résultats ?",
    a: "La plupart de nos clients constatent un gain significatif dès les premières semaines. La rentabilité est généralement atteinte dans les premiers mois.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background-alt py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-sm tracking-[0.25em] text-primary mb-12 uppercase text-center">
            Questions fréquentes
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-primary/10 pb-4"
              >
                <AccordionTrigger className="text-left text-foreground text-lg hover:no-underline hover:text-primary transition-colors py-4 [&[data-state=open]]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-ivory/60 text-base leading-relaxed pt-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;
