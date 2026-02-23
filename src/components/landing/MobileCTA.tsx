const BOOKING_URL = "https://calendly.com/ailiberty/30min";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-xl border-t border-border md:hidden">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="gradient-cta text-primary-foreground w-full h-14 rounded-full flex items-center justify-center text-base font-medium"
      >
        → Réserver mon créneau
      </a>
    </div>
  );
};

export default MobileCTA;
