import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    title: "אתר רגיל",
    price: "4,990 ₪",
    monthlyFee: "249 ₪",
    features: [
      { text: "עיצוב מותאם אישית לעסק", icon: CheckCircle2 },
      { text: "לוגו מותאם אישית לעסק", icon: CheckCircle2 },
      { text: "כתיבת תוכן שיווקי מלא", icon: CheckCircle2 },
      { text: "עמודים ותוכן ללא הגבלה כולל סרטונים", icon: CheckCircle2 },
      { text: "SEO מלא - קוד מותאם לגוגל ולביצועים מהירים", icon: CheckCircle2 },
      { text: "דרכים ליצירת קשר על פי בחירתך", icon: CheckCircle2 },
      { text: "תפריט נגישות על פי החוק", icon: CheckCircle2 },
    ],
    highlight: false,
  },
  {
    title: "אתר משולב אנימציות תלת מימד 3D",
    price: "5,990 ₪",
    monthlyFee: "249 ₪",
    features: [
      { text: "עיצוב מותאם אישית לעסק", icon: CheckCircle2 },
      { text: "לוגו מותאם אישית לעסק", icon: CheckCircle2 },
      { text: "כתיבת תוכן שיווקי מלא", icon: CheckCircle2 },
      { text: "עמודים ותוכן ללא הגבלה כולל סרטונים", icon: CheckCircle2 },
      { text: "SEO מלא - קוד מותאם לגוגל, לביצועים מהירים ומוכן לקידום", icon: CheckCircle2 },
      { text: "דרכים ליצירת קשר על פי בחירתך", icon: CheckCircle2 },
      { text: "תפריט נגישות על פי החוק", icon: CheckCircle2 },
      { text: "אלמנטים בתלת-ממד (3D) ואנימציות מורכבות", icon: Sparkles },
    ],
    highlight: true,
  },
];

const PricingCard = ({ plan }: { plan: (typeof pricingPlans)[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (cardRef.current && featuresRef.current.length > 0) {
      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-8 rounded-2xl flex flex-col h-full border glow-blue",
        plan.highlight ? "border-primary" : "border-border"
      )}
    >
      <h3 className="text-2xl font-bold mb-2 text-glow-violet">{plan.title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-primary">{plan.price}</span>
        <span className="text-muted-foreground"> תשלום חד פעמי</span>
      </div>
      <p className="text-lg font-semibold mb-6">
        + {plan.monthlyFee} <span className="text-muted-foreground">תשלום חודשי קבוע</span>
      </p>
      <ul className="space-y-4 flex-grow">
        {plan.features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <li key={idx} ref={(el) => (featuresRef.current[idx] = el)} className="flex items-start gap-3">
              <Icon
                className={cn(
                  "mt-1 flex-shrink-0",
                  feature.icon === Sparkles ? "text-accent" : "text-primary"
                )}
                size={20}
              />
              <span>{feature.text}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <a href="#contact">
          <Button size="lg" className="w-full">
            בואו נתחיל
          </Button>
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-glow-blue">
          החבילות שלנו
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          בחר את החבילה המושלמת עבור העסק שלך.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;