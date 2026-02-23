import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ProcessSection from "@/components/landing/ProcessSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import StickyHeader from "@/components/landing/StickyHeader";
import MobileCTA from "@/components/landing/MobileCTA";

const Index = () => {
  return (
    <main>
      <StickyHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
      
    </main>
  );
};

export default Index;
