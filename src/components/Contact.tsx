import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { InstagramLogo, LinkedinLogo, FacebookLogo, Spinner } from "@phosphor-icons/react"; // אופציונלי: אייקון טעינה אם תרצה
import { toast } from "@/hooks/use-toast";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // 1. מצב טעינה

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    // ... (האנימציות שלך נשארות ללא שינוי)
    const inputs = formRef.current?.querySelectorAll("input, textarea");
    const button = formRef.current?.querySelector("button");

    if (inputs) {
      gsap.fromTo(
        Array.from(inputs),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            scrub: 1
          }
        }
      );
    }

    if (button) {
      gsap.fromTo(
        button,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%"
          }
        }
      );
    }
  }, []);

  // 2. הפונקציה המעודכנת
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // התחלת שליחה

    try {
      const response = await fetch("https://formspree.io/f/meoyggbw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // הצלחה
        toast({
          title: "ההודעה נשלחה!",
          description: "תודה על פנייתך. אחזור אליך בהקדם!",
        });

        // ניקוי הטופס
        setFormData({ name: "", email: "", message: "" });

        // אנימציית כפתור (הקוד המקורי שלך)
        const button = formRef.current?.querySelector("button");
        if (button) {
          gsap.to(button, {
            scale: 1.1,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
          });
        }
      } else {
        // שגיאה מצד השרת
        toast({
          title: "שגיאה בשליחה",
          description: "אנא נסה שוב מאוחר יותר או צור קשר ישירות במייל.",
          variant: "destructive" // בהנחה שיש לך variant כזה ב-toast
        });
      }
    } catch (error) {
      // שגיאת רשת
      toast({
        title: "שגיאת תקשורת",
        description: "בדוק את החיבור לאינטרנט שלך.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false); // סיום טעינה
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-glow-blue">
          צרו קשר
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          יש לכם פרויקט בראש? בואו ניצור משהו מדהים ביחד.
        </p>

        <div className="glass-card p-8 rounded-2xl">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name" // חשוב להוסיף name עבור Formspree (למרות ששולחים JSON)
                placeholder="השם שלך"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isSubmitting} // ניטרול בזמן שליחה
                className="bg-background/50 border-primary/20 focus:border-primary focus:glow-blue transition-all duration-300"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email" // חשוב להוסיף
                placeholder="האימייל שלך"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
                className="bg-background/50 border-primary/20 focus:border-primary focus:glow-blue transition-all duration-300"
              />
            </div>

            <div>
              <Textarea
                name="message" // חשוב להוסיף
                placeholder="ההודעה שלך"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                disabled={isSubmitting}
                className="bg-background/50 border-primary/20 focus:border-primary focus:glow-blue transition-all duration-300 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting} // מונע שליחה כפולה
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-blue transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? "שולח..." : "שלח הודעה"}
            </Button>
          </form>

          {/* Social Links - נשאר ללא שינוי */}
          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-border">
            <a href="https://www.instagram.com/148roi/" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 rounded-full bg-background/50 hover:bg-primary/20 hover:glow-blue transition-all duration-300 hover:scale-110" aria-label="Instagram">
              <InstagramLogo weight="fill" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="https://www.linkedin.com/in/roi-azari/" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 rounded-full bg-background/50 hover:bg-primary/20 hover:glow-blue transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
              <LinkedinLogo weight="fill" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="https://www.facebook.com/roi.azari.2025?locale=he_IL" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 rounded-full bg-background/50 hover:bg-primary/20 hover:glow-blue transition-all duration-300 hover:scale-110" aria-label="Facebook">
              <FacebookLogo weight="fill" className="h-6 w-6 md:h-8 md:w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;